const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route purchase_agreement
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET PURCHASE AGREEMENT  SERVER HIT');
    const queryText = `SELECT * FROM "Purchase_Agreement" ORDER by "id"`;
    pool.query(queryText)
        .then(result => {
            console.log(result.rows);
            res.send(result.rows)
        })
        .catch(error => {
            console.log('error making SELECT for purchase:', error);
            res.sendStatus(500);
        })
});
 

// gets all pages for PDF contruction for purchase_agreement
router.get('/PDF_pages', (req,res)=>{
    pool.query(`
    select "Purchase_Agreement"."PAGE_1","Purchase_Agreement"."PAGE_2","Purchase_Agreement"."PAGE_3",
    "Purchase_Agreement"."PAGE_4","Purchase_Agreement"."PAGE_5","Purchase_Agreement"."PAGE_6",
    "Purchase_Agreement"."PAGE_7","Purchase_Agreement"."PAGE_8","Purchase_Agreement"."PAGE_9",
    "Purchase_Agreement"."PAGE_10","Purchase_Agreement"."PAGE_11","Purchase_Agreement"."PAGE_12",
    "Purchase_Agreement"."PAGE_12", "Purchase_Agreement"."PAGE_13" from "Purchase_Agreement" where "id" = 1;`)
    .then((results)=>{
        console.log(results.rows)
        res.send(results.rows)
    }).catch((error)=>{
        console.log('error in purchase agreement',error)
    })
});


router.get('/answers/:id', (req,res)=>{
    console.log(req.params.id)
    pool.query(` select * from "Purchase_Agreement" where "id" = $1;`,[req.params.id])//req.param.id
    .then((results)=>{
        console.log(results.rows)
        res.send(results.rows)
    }).catch((error)=>{
        console.log('error in purchase agreement',error)
    })
});

router.put('/update', rejectUnauthenticated, (req, res) => {
    // console.log('UPDATE Purchase_Agreement SERVER HIT',req.body)
    console.log(req.body)
    pool.connect((err, client, done) => {
        let alreadyErroredOut = false;
        // code to run if there is an error
        const shouldAbort = (err, res) => {
          if (err && !alreadyErroredOut) {
            alreadyErroredOut = true;
            console.error('Error in transaction', err.stack)
            client.query('ROLLBACK', err => {
              if (err) {
                console.error('Error rolling back client', err.stack)
              }
              // release the client back to the pool
              done()
              res.sendStatus(500);
            })
          }
        }
        if (err) {
            done()
            return res.sendStatus(500)
        } else {
            client.query('BEGIN').then(()=>{
                const updatePromises = Object.entries(req.body.answers).map(([lineNumber, answer])=>{
                    return pool.query(`
                        update "Purchase_Agreement"
                        set "${lineNumber}" = $1
                        where id = $2;
                    `,[answer, req.body.id]).catch(err => shouldAbort(err, res))
                })
                Promise.all(updatePromises).then(() => {
                    if(!alreadyErroredOut) {
                        client.query('COMMIT').then(() => {
                            done();
                            res.sendStatus(200);
                        }).catch(err=>{
                            console.log('error committing action',err)
                        })
                    }
                })
            }).catch(err => shouldAbort(err, res));
        }
    })
})

/**
 * POST route purchase_agreement
 */
router.post('/', (req, res) => {

});

/**
 * DELETE route purchase_agreement
 */
router.delete('/delete/:id', (req, res) => {
    console.log('delete/:id route hit for purchase_agreement')
    const queryDelete = `DELETE FROM "Purchase_Agreement" WHERE "id"=$1`;
    pool.query(queryDelete, [req.params.id])
        .then(response => {
            res.send(response.rows)
        }).catch(error => {
            console.log('error making DELETE for purchase agreement', error);
            res.sendStatus(500);
        })
});

module.exports = router;