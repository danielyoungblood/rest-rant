const express = require("express");   //this is needed/required to use express in node.js
const app = express();    //this starts express, associates the name app with express 

//this creates a default path, what the users sees in the browser when they just type the server name in the browser
//in this case express will respond with the words "Hello World!" using the send function of the response 
app.get("/", (req, res) => { 
  res.send("Hello world!"); //res is the response object, send is a function and "Hello World!" is the parameter to the send function
});

app.listen(3000); //now we tell express to listen for people contacting the server using the number 3000
