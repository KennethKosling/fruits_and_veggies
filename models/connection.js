////////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////////
require('dotenv').config();
const mongoose = require('mongoose');

////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Establish Conection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection open/disconnects/errors
mongoose.connection
    .on('open', () => console.log('Snake Hunting Time!!!'))
    .on('close', () => console.log('The Snakes have had enough.'))
    .on('error', (error) => console.log(error));

/////////////////////////////////////////////
// Export Connection
/////////////////////////////////////////////
module.exports = mongoose;