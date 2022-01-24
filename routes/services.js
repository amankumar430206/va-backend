const express = require("express");
const router = express.Router();
const { Services } = require('../models/Service');
const { Vehicles } = require('../models/Vehicles');
const { Bills } = require('../models/Bill');

// ADMIN ROUTES
// LIST ALL SERVICES
router.get('/', async (req, res) => {
    const services = await Services
        .find({})
        .sort({ createdAt: -1 })
        .populate('vehicle')
        .populate({
            path: "bill",
            select: 'billNumber billAmount billDate'
        })

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
        .populate({
            path: 'bill',
            select: '-billPhoto'
        })

    res.json({
        success: true,
        vehicle,
        services,
    }).status(200)

});

/**
 * Deleting The Service
 *  Here the Bill associated with the service is also removed
 */
router.delete('/remove/:serviceId', async (req, res) => {

    /**
     * Find Serivice
     */
    const service = await Services
        .deleteOne({ _id: req.params.serviceId })

    // Get the Bill attached with the service
    const bill = await Bills.deleteOne({ _id: service.bill })

    if (!service) {
        res
            .status(422).json({
                success: false,
                msg: "No Service Found"
            })
    }

    res
        .status(200).json({
            success: true,
            msg: "Serviced Removed Successfully!"
        })

});

module.exports = router;
