require("dotenv").config();

const express = require("express"); //this is needed/required to use express in node.js
const app = express(); //this starts express, associates the name app with express

//the following two lines tell react how we are going to display stuff to the browser
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/places", require("./controllers/places"));

//this creates a default path, what the users sees in the browser when they just type the server name followed by :3000 in the browser
//in this case the server name is localhost:3000
//in this case express will respond with the words "Hello World!" using the send function of the response
app.get("/", (req, res) => {
  res.render("home"); //res is the response object, render is a function and "home" refers to the file home.jsx
});

//this is used when the user types in an address that has not been defined
//when an address user types has not been defined they will see the message 404 page
//in other words the * means any number of characters, examples : test, api
app.get("*", (req, res) => {
  res.render("error404");
});

//now we tell express to listen for people contacting to the server using the number specified in the .env file with the name PORT
//app refers to express, so we are saying to express to listen
//the word process tells node.js to look at the .env file for the word PORT
app.listen(process.env.PORT);
