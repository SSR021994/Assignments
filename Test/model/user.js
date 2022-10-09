const mongoose = require('mongoose');
userSchema = mongoose.Schema({
    // _id : mongoose.Schema.Types.ObjectId,
    username : String,
    phone : Number,
    email : String,
    password  : String,
})

module.exports = mongoose.model('user', userSchema);