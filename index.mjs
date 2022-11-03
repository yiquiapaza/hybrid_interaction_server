// core dep
import express from 'express';
import barcharRouters from './routers/barchart.mjs';
//const scatterplotRouters = require('./routers/scatterplot');
//import fs from 'fs';

//const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));

const app = express();
// express config
app.use(express.json());
app.use(express.urlencoded());



// Routes

app.use('/barchart', barcharRouters);
//app.use('/scatterplot', scatterplotRouters);

// TODO:
// Create GET and POST position service URL
// Create GET and POST rotation service URL
// Create a hook for interaction or maybe just a new URL for GET and POST information about elements
// Create log for eeach event

app.listen(3000);