let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  nombre : {type: String, required : true},
  correo : {type: String, required : true}
});

module.exports = mongoose.model('User', UserSchema);