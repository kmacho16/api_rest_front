const cors = require('cors');
const express = require('express');
const app = express();
//const routeIndex = require('./routes/index');
const routeApi= require('./routes/tasks');
const path= require('path');


//settings
app.set('views',path.join(__dirname,'views'));
app.set('port',process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
//app.use(routeIndex);
app.use('/api',routeApi);

//static files
app.use(express.static(path.join(__dirname,'dist')));

//https://www.youtube.com/watch?v=-7aK7zn7NaY 21,22




app.listen(3000,()=>{});