const mongoose = require('mongoose');
//define a schema/ blueprint NOTE: id is not a part of the schema 
  const userSchema = new mongoose.Schema({
    firstname:  { type: String, required: true},
    lastname:  { type: String, required: true},
    username:  { type: String, required: true},
    email:  { type: String, required: true},
    phonenumber:  { type: Number, required: true},
    address:  { type: String, required: true},
    zipcode:  { type: Number, required: true},
    password:  { type: String, required: true}
  
  })


//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('User', userSchema,'Users');
//note capital U in the collection name          