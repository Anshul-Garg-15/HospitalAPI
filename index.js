const express = require('express');
const app = express();
const port = 7000;
const db = require('./config/mongoose');
const passport = require('passport');
const passportJwt = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

//to express router
app.use('/' , require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is Running on : ${port}`);
});