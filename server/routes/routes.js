
const express = require('express');

const router = express.Router()

module.exports = router;
const Model = require('../model/model');


//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        company: req.body.company,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        isInvestment: req.body.isInvestment,
        isSaving: req.body.isSaving,
        isTax: req.body.isTax,
        logo: req.body.logo,
        location :req.body.location
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get Taxes
router.get('/getTax', async (req, res) => {
    try {
        const data = await Model.find({isTax:true});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get Budget
router.get('/getSaving', async (req, res) => {
    try {
        const data = await Model.find({isSaving : true});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get Investiment
router.get('/getInvestment', async (req, res) => {
    try {
        const data = await Model.find({isInvestment : true});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

