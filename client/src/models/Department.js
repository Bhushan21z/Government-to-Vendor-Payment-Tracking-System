const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({

    address:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    depmail:{
        type:String,
        required:true
    },
    deppin:{
        type:Number,
        required:true
    }


//   address: String,
//   govtype: String,
//   name: String,
//   govmail: String,
//   govpin: Number,

});

const Government = mongoose.model('Department', departmentSchema);

module.exports = Government;
