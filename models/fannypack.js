const mongoose = require('mongoose');

const fannypackSchema = new mongoose.Schema ({
    image: String, 
    description: String, 
    price: String
})

module.exports = mongoose.model('Fannypack', fannypackSchema);