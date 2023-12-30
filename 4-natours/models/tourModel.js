const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this tour'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
