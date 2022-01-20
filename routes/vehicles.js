const express = require("express");
const router = express.Router();
const _ = require('lodash');
const { Vehicles, ValidateVehicle } = require('../models/Vehicles');
const { Services, ValidateService } = require('../models/Service');
const { Bills, ValidateBill } = require('../models/Bill');

// ADMIN ROUTES
// LIST ALL Vehicles
router.get('/', async (req, res) => {
    const result = await Vehicles.find({});
    res.json({
        result,
    }).status(200);
});

// Adding new Service to Vehicle
router.post('/addService', async (req, res) => {
    // Registering the vehicle
    const vehicle = _.pick(req.body, ['vehicleNo']);

    /**
     * CHecks
     * service for new vehicle 
     * Service for existing vehicle
     */
    let Vehicle = await Vehicles.findOne({ 'vehicleNo': vehicle.vehicleNo })
    if (!Vehicle) {
        Vehicle = await new Vehicles(vehicle);
        // saving vehicle to database
        Vehicle = await Vehicle.save();
        console.log("New Vehicle Added", Vehicle)
    }

    // creating new service
    const service = _.pick(req.body, ['customerName', 'phoneNumber']);
    let Service = await new Services(service);
    Service.serviceId = await generateServiceId();
    Service.vehicle = Vehicle._id;

    // creating bill 
    const bill = _.pick(req.body, ['billNumber', 'billPhoto', 'billAmount']);
    let Bill = await new Bills(bill);
    Service.bill = Bill._id;
    Service.serviceTotal = Bill.billAmount;

    // saving Service and Biil
    Service = await Service.save();
    Bill = await Bill.save();

    // console.log({
    //     Vehicle,
    //     Service,
    //     Bill
    // })

    res.json({
        success: true,
        vehicle
    }).status(200)
});

async function generateServiceId() {
    const res = await Services.find({});
    return "VA" + (res.length + 1).toString();
}

module.exports = router;
