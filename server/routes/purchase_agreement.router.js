const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET route for signed purchase_agreement
router.get('/signedDocs', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM purchase_agreement WHERE "SIGNATURE_BUYER_1" IS not NULL`;
    pool.query(queryText)
        .then(result => {
          console.log("wow")
            // console.log(result.rows);
            res.send(result.rows)
        })
        .catch(error => {
            console.log('error making SELECT for listing contract:', error);
            res.sendStatus(500);
        })
});

// GET route purchase_agreement
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('GET PURCHASE AGREEMENT  SERVER HIT');
    const queryText = `SELECT * FROM purchase_agreement ORDER by "id"`;
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

router.get('/answers/:id', rejectUnauthenticated, (req,res)=>{
    pool.query(` select * from purchase_agreement where "id" = $1;`,[req.params.id])//req.param.id
    .then((results)=>{
        console.log(results.rows)
        res.send(results.rows)
    }).catch((error)=>{
        console.log('error in purchase agreement',error)
    })
});

router.put('/update', rejectUnauthenticated, (req, res) => {
    // console.log('UPDATE purchase_agreement SERVER HIT',req.body)
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
                        update purchase_agreement
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

// POST route purchase_agreement
router.post('/save', rejectUnauthenticated, (req, res) => {
    console.log('PURCHASE POST SERVER', req.body)
    const querySave = `INSERT INTO purchase_agreement VALUES(DEFAULT) RETURNING "id";`
    pool.query(querySave)
        .then(({ rows }) => {
            res.send(rows);
        }).catch(error => {
            console.log('error making INSERT for post purchase_agreement answers', error);
            res.sendStatus(500);
        })
})

//DELETE route purchase_agreement
router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
    console.log('delete/:id route hit for purchase_agreement')
    const queryDelete = `DELETE FROM purchase_agreement WHERE "id"=$1`;
    pool.query(queryDelete, [req.params.id])
        .then(response => {
            res.send(response.rows)
        }).catch(error => {
            console.log('error making DELETE for purchase agreement', error);
            res.sendStatus(500);
        })
});

module.exports = router;
