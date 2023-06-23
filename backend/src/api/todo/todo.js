// restfull is a node module that provides a simple way to create REST APIs using Node.js, Express and Mongoose.
const restful = require('node-restful')

// Create a new mongoose schema
const mongoose = restful.mongoose

// Create a new mongoose schema
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

// Export the schema
module.exports = restful.model('Todo', todoSchema)