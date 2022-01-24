const express = require("express");
const router = express.Router();
const _ = require('lodash');
const { Vehicles, ValidateVehicle } = require('../models/Vehicles');
const { Services, ValidateService } = require('../models/Service');
const { Bills, ValidateBill } = require('../models/Bill');

// ADMIN ROUTES
// LIST ALL Vehicles
router.get('/', async (req, res) => {
    const vehicles = await Vehicles.find({})
        .sort({ createdAt: -1 })
    res.json({
        vehicles,
        suceess: true
    }).status(200);
});

// Adding new Service to Vehicle
router.post('/addService', async (req, res) => {
    // Registering the vehicle
    const vehicle = _.pick(req.body, ['vehicleNo', 'vehicleModel']);

    /**
     * CHecks
     * -service for new vehicle 
     * -Service for existing vehicle
     */

    let Vehicle = await Vehicles.findOne({ 'vehicleNo': vehicle.vehicleNo })
    if (!Vehicle) {
        Vehicle = await new Vehicles(vehicle);
    }
    if (!Vehicle.vehicleModel && vehicle.vehicleModel) {
        Vehicle.vehicleModel = vehicle.vehicleModel
    }

    // creating new service
    const service = _.pick(req.body, ['customerName', 'phoneNumber', 'serviceDate', 'serviceType', 'vehicleKm']);
    let Service = await new Services(service);
    Service.serviceId = await generateServiceId();
    Service.vehicle = Vehicle._id;

    // creating bill 
    const bill = _.pick(req.body, ['billNumber', 'billPhoto', 'billAmount']);
    let Bill = await new Bills(bill);
    Service.bill = Bill._id;
    Service.serviceTotal = Bill.billAmount;
    Bill.billDate = service.serviceDate;

    console.log(Vehicle)
    // saving Service and Biil
    Vehicle = await Vehicle.save();
    Service = await Service.save();
    Bill = await Bill.save();

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
