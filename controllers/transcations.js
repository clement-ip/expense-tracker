const Transaction = require('../models/Transactions');

// Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
    // res.send('GET transactions');
}

// Add new transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
    try {
        const { name, category, amount } = req.body;
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else{
            return res.send(500).json({
                success: false,
                error: 'Server Error'
            });
        }
        
    }
    // res.send('POST transaction');
}

// Delete single transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No such transaction exists'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
        
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
    // res.send('DELETE transaction');
}