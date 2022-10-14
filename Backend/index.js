const express = require('express');
const db = require('./database');
const cors = require('cors');
const Port = 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : false}));




app.listen(Port, (err) =>{
  err ? console.log('Something happened') :
  console.log('server is Connected');
});