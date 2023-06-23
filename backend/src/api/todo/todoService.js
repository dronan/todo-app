const Todo = require('./todo')

// Create the methods to be used in the routes
Todo.methods(['get', 'post', 'put', 'delete'])

// Force the return the updated object, not the original
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo