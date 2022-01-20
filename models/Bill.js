const mongoose = require('mongoose');
const Joi = require('joi');


const BillSchema = new mongoose.Schema({
    billNumber: {
        type: Number,
        trim: true,
        required: true,
        unique: true
    },
    billPhoto: {
        type: String,
        trim: true
    },
    billAmount: {
        type: String,
        trim: true
    },
}, { timestamps: true });

// VALIDATING STUDENT SCHEMA - ON LOGIN
function ValidateBill(bill) {
    // defining validation schema
    const schema = Joi.object({
        billNo: Joi.string().required(),
        billProof: Joi.string().required(),
    });
    return schema.validate(bill);
}


const Bills = new mongoose.model("bills", BillSchema)

module.exports = { Bills, ValidateBill }