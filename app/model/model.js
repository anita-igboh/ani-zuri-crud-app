const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    name: String,
    email: String,
    country: String
});

module.exports = mongoose.model('Crud', crudSchema);