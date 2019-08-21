const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const PDF = require("../../src/pdfs/generate_pdfs")
const path = require('path')

//GET route listing_contract 
router.get('/pdf/:id', (req, res) => {
  const queryText = `SELECT * FROM listing_contract WHERE "SIGNATURE_BUYER_1" IS not NULL`;
  pool.query(queryText)
    .then(result => {
      console.log(result.rows);
      const pdf_filename = "test.pdf"
      PDF.generateListing(pdf_filename, result.rows[0])
      const pdf_path = path.join(__dirname, "/../../src/pdfs/signed_pdfs/", pdf_filename)
      res.sendFile(pdf_path)
    })
    .catch(error => {
      console.log('error making SELECT for listing contract:', error);
      res.sendStatus(500);
    })
}); 

//GET route listing_contract 
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM listing_contract`;
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


//GET route for draft listing_contracts
router.get('/drafts', (req, res) => {
  const queryText = `SELECT * FROM listing_contract WHERE "SIGNATURE_BUYER_1" IS NULL`;
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

//GET route for signed listing_contracts
router.get('/signedDocs', (req, res) => {
  const queryText = `SELECT * FROM listing_contract WHERE "SIGNATURE_BUYER_1" IS not NULL`;
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


router.get('/answers/:id', (req, res) => {
  pool.query(` select * from listing_contract where "id" = $1;`, [req.params.id])
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
                        update listing_contract
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



// POST route listing_contract
router.post('/save', (req, res) => {
  console.log('LISTING POST SERVER', req.body)
  const querySave = `INSERT INTO listing_contract VALUES(DEFAULT) RETURNING "id";`
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
  const queryDelete = `DELETE FROM listing_contract WHERE "id"=$1`;
  pool.query(queryDelete, [req.params.id])
    .then(response => {
      res.send(response.rows)
    }).catch(error => {
      console.log('error making DELETE for listing contract', error);
      res.sendStatus(500);
    })
});

module.exports = router;
