const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
//rejectUnauthenticated


//GET route listing_contract 
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "Listing_Contract"`;
    pool.query(queryText)
        .then(result => {
            console.log(result.rows);
            res.send(result.rows)
        })
        .catch(error => {
            console.log('error making SELECT for listing contract:', error);
            res.sendStatus(500);
        })
});

// gets all pages for PDF pages for listing_contract
router.get('/PDF_pages', (req, res) => {
    pool.query(` 
    select "Listing_Contract"."PAGE_1", "Listing_Contract"."PAGE_2", 
    "Listing_Contract"."PAGE_3", "Listing_Contract"."PAGE_4",
    "Listing_Contract"."PAGE_5", "Listing_Contract"."PAGE_6", 
    "Listing_Contract"."PAGE_7" FROM "Listing_Contract" WHERE "id" = 1;`)
        .then((results) => {
            console.log(results.rows)
            res.send(results.rows)
        }).catch((error) => {
            console.log('error in purchase agreement', error)
        })
});


router.get('/answers', (req, res) => {
    pool.query(` select * from "Listing_Contract" where "id" = $1;`, [req.query.id])
        .then((results) => {
            console.log(results.rows)
            res.send(results.rows)
        }).catch((error) => {
            console.log('error in listing contract ', error)
        })
});


/**
 * EDIT route for listing_contract
 */
router.put('/update',rejectUnauthenticated, (req, res) => {
    // console.log('UPDATE listing_contract SERVER HIT',req.body)
    const user = req.body.id;

    pool.connect((err, client, done) => {

        
        const shouldAbort = err => {
          if (err) {
            console.error('Error in transaction', err.stack)
            client.query('ROLLBACK', err => {
              if (err) {
                console.error('Error rolling back client', err.stack)
              }
              // release the client back to the pool
              done()
            })
          }
          return !!err
        }
        if(err){
            done()
            return res.sendStatus(500)
        }


        client.query('BEGIN').then(()=>{
            req.body.answers.forEach((filledInformation)=>{
            const column = filledInformation.lineNumber
            pool.query(`
                update "Listing_Contract"
                set "${column}" = $1
                where id = $2;
            `,[filledInformation.answer, user]).catch( err => {
                shouldAbort(err); 
                return res.sendStatus(500);
                })
            })
        
        
            client.query('COMMIT', err=>{
                if(err){
                    console.log('error committing action',err.stack)
                }
                done()
            })
        })
    })
})



// POST route listing_contract
router.post('/save', (req, res) => {
    console.log('LISTING POST SERVER', req.body)
    const querySave = `INSERT INTO "Listing_Contract" VALUES(DEFAULT) RETURNING "id"`
    pool.query(querySave)
        .then(({ rows }) => {
            res.send(rows);
        }).catch(error => {
            console.log('error making INSERT for post listing_contract answers', error);
            res.sendStatus(500);
        })
})


// DELETE route listing_contract
router.delete('/delete/:id', (req, res) => {
    console.log('delete/:id route hit for listing_contract')
    const queryDelete = `DELETE FROM "Listing_Contract" WHERE "id"=$1`;
    pool.query(queryDelete, [req.params.id])
        .then(response => {
            res.send(response.rows)
        }).catch(error => {
            console.log('error making DELETE for listing contract', error);
            res.sendStatus(500);
        })
});


//testing signature with our app

router.post('/taco', (req, res) =>{
    console.log('i just sent the image to database', req.body);
    // pool.query (`INSERT INTO "Listing_Contract" (sign)
    // VALUES ($1); `, [...req.body])
    res.sendStatus(200);
});



module.exports = router;