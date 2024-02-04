const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    company: {
        required: true,
        type: String
    },
    phoneNumber: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    isInvestment: {
        required: true,
        type: Boolean
    },
    isSaving: {
        required: true,
        type: Boolean
    },
    isTax: {
        required: true,
        type: Boolean
    },
    logo: {
        required: true,
        type: String
    }
    
    


})

module.exports = mongoose.model('Data', dataSchema)
