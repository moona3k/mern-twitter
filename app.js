const express = require("express"); // 'express' dependency is the main framework
const app = express(); // creates new express server

const port = process.env.Port || 5000; 
// before we can run the server, we need to tell oru app which port to run on
// heroku requires us to run server on 'process.env.PORT'
// localhost:5000

app.get("/", (req, res) => res.send("hello world!"));
// make GET request to "/" url

