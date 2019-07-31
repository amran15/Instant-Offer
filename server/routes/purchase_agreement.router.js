const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route purchase_contract 
 */
router.get('/', (req, res) => {
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

/**
 * POST route purchase_contract
 */
router.post('/', (req, res) => {

});

module.exports = router;