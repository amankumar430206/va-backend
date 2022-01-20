const express = require("express");
const router = express.Router();
const { Bills } = require('../models/Bill');



router.get('/:billNumber', async (req, res) => {
    const bill = await Bills
        .findOne({ 'billNumber': req.params.billNumber })

    if (!bill) {
        return res.json({
            msg: "Bill Not Found",
            success: false
        }).status(404);
    }
    res.json({
        success: true,
        bill
    }).status(200)

});

module.exports = router;
