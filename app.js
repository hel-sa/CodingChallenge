const express = require('express');

const app = express();
const mongoose = require("mongoose");
require('dotenv/config');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Import Post Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//Connect to DB
mongoose 
 .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

app.listen(3000);