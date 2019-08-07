const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//const { rejectUnauthenticated } = require('../modules/authentication-middleware');
//rejectUnauthenticated


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

// gets all pages for PDF pages for listing_contract
router.get('/PDF_pages', (req, res) => {
    pool.query(` 
    select "Listing_Contract"."PAGE_1", "Listing_Contract"."PAGE_2", 
    "Listing_Contract"."PAGE_3", "Listing_Contract"."PAGE_4",
    "Listing_Contract"."PAGE_5", "Listing_Contract"."PAGE_6", 
    "Listing_Contract"."PAGE_7" FROM "Listing_Contract" WHERE "id" = 1;`)
        .then((results) => {
            console.log(results.rows)
            res.send(results.rows)
        }).catch((error) => {
            console.log('error in purchase agreement', error)
        })
});


router.get('/answers/:id', (req, res) => {
    pool.query(` select * from "Listing_Contract" where "id" = $1;`, [req.params.id])
        .then((results) => {
            console.log(results.rows)
            res.send(results.rows)
        }).catch((error) => {
            console.log('error in purchase agreement', error)
        })
});


/**
 * EDIT route for listing_contract
 */
// router.put('/update/:id', (req, res) => {
//     console.log('UPDATE listing_contract SERVER HIT');
//     const queryUpdate= `UPDATE "listing_contract" SET "L3"=$1 WHERE "review"."id"= $2`;
//     pool.query(queryUpdate, [req.body, req.params.id])
//         .then(result => {
//             console.log(result);
//             res.sendStatus(200);
//         })
//         .catch(error => {
//             console.log('error making UPDATE for listing_contract answers:', error);
//             res.sendStatus(500);
//         })
// });


// POST route listing_contract (fix this!)
router.post('/save', (req, res) => {
    console.log('LISTING POST SERVER', req.body)
    const querySave = `INSERT INTO "Listing_Contract"("BUYER_1", "BUYER_1_ADDRESS","BUYER_1_PHONE", "BUYER_1_EMAIL", "SIGNATURE_BUYER_1", "PRINTED_SIGNATURE_BUYER_1",
    "DATE", "PAGE_1", "PAGE_2", "PAGE_3", "PAGE_4", "PAGE_5", "PAGE_6", "PAGE_7", "PAGE_8", "L3", "L4", "L6", "L7", 
    "L8", "L9", "L12", "L13", "L41", "L54", "L63", "L71", "L72", "L73", "L115", "L118", "L119", "L121", "L131","L146", 
    "L148A", "L148B", "L148C", "L150A", "L150B", "L150C", "L152A", "L152B", "L163", "L164",  "L165A", "L165B",
    "L175", "L196", "L198", "L200", "L237")`
pool.query(querySave,)
        .then(() => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('error making INSERT for post listing_contract answers', error);
            res.sendStatus(500);
        })
})

// POST route listing_contract
// router.post('/save', (req, res) => {
//     console.log('LISTING POST SERVER', req.body)
//     const querySave = `INSERT INTO "Listing_Contract"("BUYER_1", "BUYER_1_ADDRESS","BUYER_1_PHONE", "BUYER_1_EMAIL", "SIGNATURE_BUYER_1", "PRINTED_SIGNATURE_BUYER_1",
//     "DATE", "PAGE_1", "PAGE_2", "PAGE_3", "PAGE_4", "PAGE_5", "PAGE_6", "PAGE_7", "PAGE_8", "L3", "L4", "L6", "L7", 
//     "L8", "L9", "L12", "L13", "L41", "L54", "L63", "L71", "L72", "L73", "L115", "L118", "L119", "L121", "L131","L146", 
//     "L148A", "L148B", "L148C", "L150A", "L150B", "L150C", "L152A", "L152B", "L163", "L164",  "L165A", "L165B",
//     "L175", "L196", "L198", "L200", "L237") 
//     VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, 
//         $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36,$37, $38, $39, $40, $41, $42, $43, $44, $45, 
//         $46, $47, $48, $49, $50, $51, $52);`
//     pool.query(querySave, [req.body.BUYER_1, req.body.BUYER_1_ADDRESS, req.body.BUYER_1_PHONE,req.body.BUYER_1_EMAIL, req.body.SIGNATURE_BUYER_1, req.body.PRINTED_SIGNATURE_BUYER_1, 
//         req.body.DATE, req.body.PAGE_1, req.body.PAGE_2, req.body.PAGE_3, req.body.PAGE_4, req.body.PAGE_5,
//         req.body.PAGE_6, req.body.PAGE_7, req.body.PAGE_8, req.body.L3, req.body.L4,req.body.L6, req.body.L7, 
//         req.body.L8, req.body.L9, req.body.L12, req.body.L13, req.body.L41, req.body.L54, req.body.L63, req.body.L71, req.body.L72, 
//         req.body.L73, req.body.L115, req.body.L118, req.body.L119, req.body.L121, req.body.L131, req.body.L146, req.body.L148A, 
//         req.body.L148B, req.body.L148C, req.body.L150A, req.body.L150B, req.body.L150C, req.body.L152A, req.body.L152B, req.body.L163,
//         req.body.L164, req.body.L165A, req.body.L165B, req.body.L175, req.body.L196, req.body.L198,req.body.L200, req.body.L237])
//         .then(() => {
//             res.sendStatus(201);
//         }).catch(error => {
//             console.log('error making INSERT for post listing_contract answers', error);
//             res.sendStatus(500);
//         })
// });


// DELETE route listing_contract
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

module.exports = router;