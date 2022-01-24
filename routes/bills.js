const express = require("express");
const router = express.Router();
const { Bills } = require('../models/Bill');

router.get('/', async (req, res) => {
    const bills = await Bills.find({}).select('-billPhoto').sort({ createdAt: -1 })
    res.json({
        success: true,
        bills
    }).status(200)

});

router.get('/:billNumber', async (req, res) => {
    const bill = await Bills
        .findOne({ 'billNumber': req.params.billNumber })


    if (!bill) {
        return res.json({
            msg: "Bill Not Found",
            success: false
        }).status(422);
    }
    res.json({
        success: true,
        bill
    }).status(200)

});

module.exports = router;
