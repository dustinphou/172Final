var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
	}

  address: {
   	type: String,
   	unique: false,	//people may share the same address
   	required: true
   	}
});

module.exports = mongoose.model('user', UserSchema);
