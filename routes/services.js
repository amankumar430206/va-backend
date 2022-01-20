const express = require("express");
const router = express.Router();
const { Services } = require('../models/Service');
const { Vehicles } = require('../models/Vehicles');

// ADMIN ROUTES
// LIST ALL SERVICES
router.get('/', async (req, res) => {
    const services = await Services
        .find({})
        .populate('vehicle')
        .populate('bill')
    res.json({
        services,
    }).status(200);
});

router.get('/:vehicleNo', async (req, res) => {

    const vehicle = await Vehicles
        .findOne({ 'vehicleNo': req.params.vehicleNo })

    if (!vehicle) {
        return res.json({
            msg: "No Vehicle Found",
            success: false
        }).status(404);
    }

    const services = await Services
        .find({ vehicle: vehicle._id })
        .sort({ createdAt: -1 })
        .populate('bill')

    res.json({
        success: true,
        vehicle,
        services,
    }).status(200)

});

module.exports = router;
