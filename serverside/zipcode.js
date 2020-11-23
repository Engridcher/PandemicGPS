const { model, Schema } = require('mongoose') ; 

const zipcode = new Schema({
    zipcode:{
        type: String, 
        required: true
    }
});

const ZipCode = model('ZipCode', zipcode);

module.exports = ZipCode;