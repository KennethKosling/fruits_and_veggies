
////////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////////
const mongoose = require('./connection');

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose;

// make fruits schema
const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
});

// make fruit model
const Fruit = model("Fruit", fruitSchema);


////////////////////////////////////////////////
// Export Model
////////////////////////////////////////////////
module.exports = Fruit;