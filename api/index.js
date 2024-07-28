const express = require("express")
const connectDB = require('../db.js');
const FormData = require('../model.js');
const cors = require('cors')
require('dotenv').config();
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/api/formsubmission', async (req, res) => {
    const { fullName, phone, email,subject,message, } = req.body;
    try {
      const newFormData = new FormData({
        fullName,
        phone,
        email,
        subject,
        message
      });
      
      await newFormData.save();

      res.status(201).json({message: 'Form data saved successfully!', status: `good`});
  } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({message: 'Internal Server Error', status: `bad`});  
  }
   
  
  });

  app.get('/' , (req, res)=>{
    res.send('Server is running absolutely fine!');
  })

  app.listen(port, async () => {
    await connectDB();
    console.log(`Server is running on ${port}`);
  });


  module.exports = app;