const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());


const blogRoutes = require('./routes/blog')
app.use('/api/v1' , blogRoutes);

app.listen(PORT,() =>{
    console.log(`server started succefully ${PORT}`);
})

const databaseConnection = require('./config/database');
databaseConnection();

app.get('/' , (req,res) => {
    res.send("<h1>!!!!!!!!!!!!!! Welcome SIR !!!!!!!!!!!!!!!!!!</h1>")
})

