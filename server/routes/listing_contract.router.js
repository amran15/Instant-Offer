const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// rejectUnauthenticated,


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

// gets all pages for PDF contruction for listing_contract
router.get('/PDF_pages', (req,res)=>{
    pool.query(` 
    select "Listing_Contract"."PAGE_1", "Listing_Contract"."PAGE_2", 
    "Listing_Contract"."PAGE_3", "Listing_Contract"."PAGE_4",
    "Listing_Contract"."PAGE_5", "Listing_Contract"."PAGE_6", 
    "Listing_Contract"."PAGE_7" FROM "Listing_Contract" WHERE "id" = 1;`)
    .then((results)=>{
        console.log(results.rows)
        res.send(results.rows)
    }).catch((error)=>{
        console.log('error in purchase agreement',error)
    }) 
});


/**
 * POST route listing_contract category 8
 */
router.post('/category8', (req, res) => {
console.log('we are posting listing category 8 answers to the database', req.body)    
res.sendStatus(200);
});

/**
 * DELETE route listing_contract
 */
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



// router.post('/signature', (req, res) =>{
//     // console.log('i just sent the image to database', req.body);
//     pool.query (`INSERT INTO "signature" (sign)
//     VALUES ($1); `, [...req.body])
//     res.sendStatus(200);
// });



/**
 * POST route listing_contract category ?
 */


module.exports = router;