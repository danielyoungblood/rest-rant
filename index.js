require("dotenv").config();

const express = require("express"); //this is needed/required to use express in node.js
const app = express(); //this starts express, associates the name app with express

app.use('/places', require('./controllers/places'))

//this creates a default path, what the users sees in the browser when they just type the server name followed by :3000 in the browser 
//in this case the server name is localhost:3000
//in this case express will respond with the words "Hello World!" using the send function of the response
app.get("/", (req, res) => {
  res.send("Hello world!"); //res is the response object, send is a function and "Hello World!" is the parameter to the send function
});

//this is used when the user types in an address that has not been defined
//when an address user types has not been defined they will see the message 404 page
//in other words the * means any number of characters, examples : test, api
app.get("*", (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
});  


//now we tell express to listen for people contacting to the server using the number specified in the .env file with the name PORT
//app refers to express, so we are saying to express to listen
//the word process tells node.js to look at the .env file for the word PORT
app.listen(process.env.PORT);





