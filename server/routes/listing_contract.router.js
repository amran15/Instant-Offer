const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route listing_contract 
 */
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

/**
 * POST route listing_contract
 */
router.post('/', (req, res) => {

});

module.exports = router;