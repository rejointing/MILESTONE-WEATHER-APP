const mongoose = require('mongoose')

const appSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    comment: {
        type: String,
        required: true
    },

    subscriber: {
        type: Boolean
    },

    residency: {
        type: String,
        enum: ['Resident', 'Non-Resident']
    }

})

appSchema.methods.getPostBy = function() {
    return `posted by ${this.username}, ${this.residency} of ${this.city}`
}

module.exports = mongoose.model('App', appSchema)