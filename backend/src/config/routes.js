const express = require('express');

module.exports = function(server) {
    // API Routes
    const router = express.Router();
    // middleware to use for all requests requested to the API
    server.use('/api', router);

    // TODO Routes
    const todoService = require('../api/todo/todoService');
    // register the routes registed in the todoService to the /todos route
    todoService.register(router, '/todos');
}