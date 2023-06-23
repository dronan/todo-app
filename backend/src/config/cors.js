// middleware to allow CORS
module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // * means that it will accept all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // methods that will be accepted
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // headers that will be accepted
    // call next() to continue the application flow
    next();
}