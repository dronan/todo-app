// Get the mongoose module
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to the database
module.exports = mongoose.connect('mongodb://localhost/todo');
