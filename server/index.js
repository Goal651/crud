require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');



// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors()); // Ensure origin matches your frontend
app.use('/', routes);




app.get('/',(req,res)=>{
    res.sendStatus(200)
})


// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
        app.listen(8000, () => {
            console.log('listening on *:8000');
        });
    })
    .catch((error) => {
        console.log(error);
    });
