/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
require('dotenv').config(); // Load ENV Variables
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const fruitController = require('./controllers/fruits');
const path = require('path'); // built in node module we use to resolve paths more on this when we use it


////////////////////////////////////////////////
// App Object Setup
////////////////////////////////////////////////
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');


////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////
app.use(morgan('tiny')); //logging
app.use(express.urlencoded({extended: true})); // override for PUT and DELETE requests from forms
app.use(methodOverride('_method')); // parse urlencoded request bodies
app.use(express.static('public')); // serve files from public statically


////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////
app.use('/fruits', fruitController);

app.get('/', (req, res) => {
    res.send('The snakes are getting away!');
});


////////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`There are snakes in snake den ${PORT}!`));