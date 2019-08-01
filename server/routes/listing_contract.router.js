const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


 //GET route listing_contract 
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "Listing_Contract" ORDER by "id"`;
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

// gets all pages for PDF contruction
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
 * POST route listing_contract
 */
router.post('/', (req, res) => {

});

module.exports = router;