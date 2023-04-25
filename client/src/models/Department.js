const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
//   address: String,
//   govtype: String,
//   name: String,
//   govmail: String,
//   govpin: Number,
});

const Government = mongoose.model('Department', departmentSchema);

module.exports = Government;
