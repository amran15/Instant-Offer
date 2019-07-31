const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route purchase_contract 
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
 
// gets all pages for PDF contruction
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

/**
 * POST route purchase_contract
 */
router.post('/', (req, res) => {

});

module.exports = router;