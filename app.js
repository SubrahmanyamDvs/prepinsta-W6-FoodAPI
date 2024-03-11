const express = require('express');
const mongoose = require('mongoose');
const FoodModel = require('./models/foodinfo');
const app = express();
const port = 3400;

require('./db/conn');

app.get('/', (req, res) => {
  res.send('<h1>WELCOME TO API CREATION </h1>');
});

app.post('/save-food', async (req, res) => {
  try {
    const rice = new FoodModel({
      
    });

    const savedRice = await rice.save();
    console.log('Saved Rice:', savedRice);
    res.json(savedRicce);  // Send the saved data as the response
  } catch (error) {
    console.error('Error saving Rice:', error.message);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at port number ${port}`);
});
