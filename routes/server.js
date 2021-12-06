const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); 

//TODO - Replace you Connection String here
//mongodb+srv://Lesya:December5*@cluster.2fjat.mongodb.net/101255738_assignment2?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://Lesya:December5*@cluster.2fjat.mongodb.net/101255738_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(employeeRouter);

app.listen(8081, () => { 
    let host = server.address().address
    let port = server.address().port
    console.log('Server is running...') });

    app.use(express.static(''))