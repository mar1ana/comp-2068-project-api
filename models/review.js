const mongoose = require('mongoose');

// Our schema
const ReviewSchema = new mongoose.Schema({
  critic: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', ReviewSchema);
