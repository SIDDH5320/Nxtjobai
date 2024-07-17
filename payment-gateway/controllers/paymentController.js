const Transaction = require('../models/Transaction');

// Create a payment
exports.createPayment = async (req, res) => {
  try {
    const { userId, amount, currency, paymentMethod } = req.body;
    const transaction = new Transaction({
      transactionId: `txn_${new Date().getTime()}`,
      userId,
      amount,
      currency,
      paymentMethod,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Process a payment
exports.processPayment = async (req, res) => {
  try {
    const { transactionId } = req.body;
    const transaction = await Transaction.findOne({ transactionId });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Mocking a payment processor response
    transaction.status = 'completed';
    await transaction.save();

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve payment status
exports.getPaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findOne({ transactionId: id });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Handle refunds
exports.refundPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findOne({ transactionId: id });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Mocking a refund process
    transaction.status = 'refunded';
    await transaction.save();

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
