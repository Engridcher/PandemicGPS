const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const donationschema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
  a3: {type: String},
  cardname: {type: String},
    cardnumber: {type: String},
    expmonth: {type: String},
    expyear: {type: String},
    cvv: {type: String},
})

module.exports = model('Donation', donationschema);
