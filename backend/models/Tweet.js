const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
    // User references the users collection aka a foreign key
  },
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tweet', tweetSchema);