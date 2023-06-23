// Import the mongoose module
const port = 3003;

// Import the body-parser middleware
const bodyParser = require('body-parser');

// Import the express framework
const express = require('express');

// Create a new express server
const server = express();

// Start the server on port 3003 and export it to be used in other files
// the body-parser middleware will parse the body of the request
// the extend option allows to parse more types of data
server.use(bodyParser.urlencoded({ extended: true }));

// the json method will parse the body of the request to json
server.use(bodyParser.json());

// Start the server on port 3003 and export it to be used in other files
// npm run dev - it will run the nodemon and the server
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
});