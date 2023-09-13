const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name:{
        type: String,
        required: [true, "Pls name is required"],
    },

},{
    timestamps: true,
});
module.exports = mongoose.model('Person', personSchema);