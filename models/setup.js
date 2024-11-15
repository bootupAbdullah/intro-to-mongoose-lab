const mongoose = require('mongoose');

// const username = prompt('What is your name? ');

// console.log(`Your name is ${username}`);

const customerSchema = new mongoose.Schema({
    Name: String,
    Age: Number
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer