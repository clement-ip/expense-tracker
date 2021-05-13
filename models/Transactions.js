const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'Please enter description']
    },
    category:{
        type: String,
        trim: true,
        // required: [true, 'Please enter description']
    },
    amount:{
        type: Number,
        required: [true, 'Please enter a value greater than 0']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);