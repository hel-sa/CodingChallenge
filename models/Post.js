const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    title: String,
    summary: String
});

module.exports = mongoose.model('Posts', FeedbackSchema)

