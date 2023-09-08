const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength:50
    },
    amount:{
        type: Number,
        required: true,
        trim: true,
        maxLength:20
    },
    type:{
        type: String,
        default: "income"
    },
   date:{
        type: Date,
        default: Date.now
    },
   category: {
        type: String,
        required: true,
        trim: true,
   },
   description: {
        type: String,
        trim: true,
        required: true,
    },
}, {timestamps: true})


module.exports = mongoose.model("Expenses", ExpenseSchema)