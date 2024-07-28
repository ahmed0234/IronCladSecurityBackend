// models/FormData.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
