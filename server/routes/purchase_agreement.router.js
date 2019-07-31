const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
<<<<<<< HEAD
=======
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
>>>>>>> master

/**
 * GET route purchase_contract 
 */
<<<<<<< HEAD
router.get('/', (req, res) => {
    
=======
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
>>>>>>> master
});

/**
 * POST route purchase_contract
 */
router.post('/', (req, res) => {

});

module.exports = router;