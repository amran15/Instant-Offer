const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route listing_contract 
 */
router.get('/', (req, res) => {
<<<<<<< HEAD
    pool.query(`SELECT * FROM "Listing_Contract"`)
    .then(result => res.send(result.rows))
    .catch(error => {
        console.log('error in SONG query', error);
        res.sendStatus(500);
    });
=======
    
>>>>>>> master
});

/**
 * POST route listing_contract
 */
router.post('/', (req, res) => {

});

module.exports = router;