// Get the mongoose module
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Set the strictQuery option to false
mongoose.set('strictQuery', true);

// Connect to the database
module.exports = mongoose.connect('mongodb://localhost/todo');
