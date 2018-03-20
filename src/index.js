const cors = require('cors');
const express = require('express');
const app = express();
const routeIndex = require('./routes/index');
const routeApi= require('./routes/tasks');


//settings
app.set('port',process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use(routeIndex);
app.use('/api',routeApi);




app.listen(3000,()=>{
	console.log("server port 3000");

	});