const mongoose = require('mongoose');
const Joi = require('joi');


const ServiceSchema = new mongoose.Schema({
    bill: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bills",
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicles",
    },
    serviceId: {
        type: String,
        trim: true,
        required: true
    },
    customerName: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: Number,
    },
    serviceTotal: {
        type: Number,
    }
}, { timestamps: true });

// VALIDATING STUDENT SCHEMA - ON LOGIN
function ValidateService(service) {
    // defining validation schema
    const schema = Joi.object({
        billNo: Joi.string().required(),
        billProof: Joi.string().required(),
    });
    return schema.validate(service);
}

const Services = new mongoose.model("services", ServiceSchema)

module.exports = { Services, ValidateService }