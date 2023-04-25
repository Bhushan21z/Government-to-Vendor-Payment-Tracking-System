const mongoose = require('mongoose');

//   address
//   govtype
//   name
//   govmail
//   govpin

const governmentSchema = new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    govtype:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    govmail:{
        type:String,
        required:true
    },
    govpin:{
        type:Number,
        required:true
    }


});

const Government = mongoose.model('Government', governmentSchema);

module.exports = Government;
