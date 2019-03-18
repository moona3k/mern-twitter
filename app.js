const express = require("express"); // 'express' dependency is the main framework
const app = express(); // creates new express server

const port = process.env.Port || 5000; 
// before we can run the server, we need to tell oru app which port to run on
// heroku requires us to run server on 'process.env.PORT'
// localhost:5000

app.get("/", (req, res) => res.send("yes testing?"));
// make GET request to "/" url

app.listen(port, () => console.log(`server is running on port ${port}`));
// tell express to start a socket and listen for connections on the path

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI; // imports the mongoDB user string from /config/keys.js

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("connected to mongooseDB succesfully"))
    .catch(err => console.log(err));


