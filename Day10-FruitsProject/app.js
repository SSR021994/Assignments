const mongoose = require("mongoose");

// Connection to MongoDB

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

// Create a Schema

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

//Use the schema to create Mongoose Model

const Fruit = mongoose.model("Fruit", fruitSchema);

//Create new fruit document

const fruit = new Fruit({
    name: "Peach",
    rating: 9,
    review: "Peaches are so yummy!"
});

//fruit.save();


//New Schema Add Person

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Shubham",
    age: 26
});

//person.save();


//Add Multiple Fruits in fruitsDB

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "Too Sour for me!"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weired texture!"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to the fruitsDB!");
//     }
// });

// Using this we can read data from database

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else {
        console.log(fruits);

        mongoose.connection.close();

        //If we want to print only fruit names then

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

