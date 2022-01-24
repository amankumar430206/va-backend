const mongoose = require('mongoose');
const Joi = require('joi');


const VehicleSchema = new mongoose.Schema({
    vehicleNo: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    vehicleModel: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

// VALIDATING STUDENT SCHEMA - ON LOGIN
function ValidateVehicle(vehicle) {
    // defining validation schema
    const schema = Joi.object({
        vehicleNo: Joi.string().required(),
    });
    return schema.validate(vehicle);
}


const Vehicles = new mongoose.model("vehicles", VehicleSchema)

module.exports = { Vehicles, ValidateVehicle }