// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);
// <-------------------------- setup ------------------------------>

const prompt = require('prompt-sync')();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
// console.log(process.env.MONGODB_URI);

const Customer = require('./models/setup.js')

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB') 

    // <--------------------- creating database items ---------------->

    //!! var names in schema must be an exact match, icluding letter casing
    // const matt43 = await Customer.create({
    //     Name: "Matt",
    //     Age: 43 
    // })

    // console.log(matt43)

    // const vivienne6 = await Customer.create({
    //     Name: "Vivienne",
    //     Age: 6
    // })

    // console.log(vivienne6)

    // const customerData = {
    //     name: "Name Goes Here"
    //     Age: 99
    // }

    // const 
    
    
    // const drDoom = await Customer.create({
    //     text: "Victor Von Doom",
    //     age: 54 
    // })

    
    // <------------------------- creating object to capture userInput ------------->
    const menuChoice = {};
    menuChoice.one = "1";
    menuChoice.create = "Create";
    menuChoice.two = "2";
    menuChoice.view = "View";
    menuChoice.three = "3";
    menuChoice.update = "Update";
    menuChoice.four = "4";
    menuChoice.delete = "Delete";
    menuChoice.five = "5";
    menuChoice.quit = "quit";

    // <---------------------------- declaring tools ------------------------------->

    const customers = await Customer.find({})    

    // <---------------------------- creating functions ------------------------------->

    const update = async (userId) => {
        newName = prompt(`what is the customers new name?`)
        newAge = prompt('What is the customer new age?')

        const updateCustomerInfo = await Customer.findByIdAndUpdate(
            userId,
            {Name: newName, Age: newAge},
            {new: true}    
        )
        console.log(updateCustomerInfo)
    }

    // const userRespone = async (userChoice) => {
    //     if(userChoice === menuChoice.one || userChoice === menuChoice.create){
    //         userSelected1 = 1
    //     } else if (userChoice === menuChoice.two || userChoice === menuChoice.view){
    //         userSelected2 = 2
    //     } else if (userChoice === menuChoice.three || userChoice === menuChoice.update){
    //         userSelected3 = 3
    //     } else if (userChoice === menuChoice.four || userChoice === menuChoice.delete){
    //         userSelected4 = 4
    //     } else if (userChoice === menuChoice.five || userChoice === menuChoice.quit){
    //         userSelected5 = 5
    //     }
    // }

    // const askUser = async () => {
    //     userChoice = prompt('What would you like to do?'.toLowerCase());
    //     userRespone(userChoice)
    // }

    // <---------------------------- starting prompts ------------------------------->
    console.log('Welcome to our CRM Tool');

    const username = prompt('What\'s your name? ');
    
    prompt(`Hello ${username}, my name is Bixel and I am here to help. Please press any key to continue.`)
   
    // console.log("Thank you. We're going to get along splendidly.")
  
    console.log(`Here\'s what I can help you with, ${username}.`)
    console.log("1. Create a customer")
    console.log("2. View all customers")
    console.log("3. Update a customer")
    console.log("4. Delete a customer")
    console.log("5. Quit")

    userChoice = prompt('What would you like to do?'.toLowerCase());

    // askUser()

    if(userChoice === menuChoice.one || userChoice === menuChoice.create){
        userSelected1 = 1
    } else if (userChoice === menuChoice.two || userChoice === menuChoice.view){
        userSelected2 = 2
    } else if (userChoice === menuChoice.three || userChoice === menuChoice.update){
        userSelected3 = 3
    } else if (userChoice === menuChoice.four || userChoice === menuChoice.delete){
        userSelected4 = 4
    } else if (userChoice === menuChoice.five || userChoice === menuChoice.quit){
        userSelected5 = 5
    }
    
    // chatgpt was used here to troubleshoot how to contact (which syntax to use - for example '.-id') as I was having hard time deciiphering how to commuicate with a database object. The logic, the code itself, was all by hand.  
    if(userSelected3) {
        console.log(`you've selected ${userSelected3}, update customer`)
        console.log("Here is a list of your customers:\n")
        customers.forEach((customer) => {
            console.log(`id: ${customer._id} -- Name: ${customer.Name}, Age: ${customer.Age}`)
        })
        captureId = prompt(console.log("Copy and paste the id of the customer you would like update here:"))
        // update() <---- calling this for a pretty long time without realizing that I wasn't inserting the captured info - the function would run - but nothing would be updated - returning a 'null' 
        update(captureId)
    }

    // askUser()

    if(userSelected2 === 2) {
        console.log(`you've selected ${userSelected}, view all customers`)
        console.log("Here is a list of your customers:\n")
        customers.forEach((customer) => {
            console.log(`id: ${customer._id} -- Name: ${customer.Name}, Age: ${customer.Age}`)
        })
    }

}

connect()