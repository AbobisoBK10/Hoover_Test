require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const Info = require('../routes/infoRoutes');


const app = express();

//middleware
app.use(express.json());

app.use((req,res,next) => {
  console.log(req.path,res.method)
  next();
})

// routes
app.use('/api/Info',Info); 

// Connect to MongoDB Atlas
mongoose.connect(process.env.Mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Start the server
    app.listen(process.env.PORT , () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas: ', err);
  });







