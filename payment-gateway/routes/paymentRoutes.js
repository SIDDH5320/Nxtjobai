const express = require('express');
const {
  createPayment,
  processPayment,
  getPaymentStatus,
  refundPayment,
} = require('../controllers/paymentController');

const router = express.Router();

router.post('/payments', createPayment);
router.post('/payments/process', processPayment);
router.get('/payments/:id', getPaymentStatus);
router.post('/payments/:id/refund', refundPayment);

module.exports = router;
