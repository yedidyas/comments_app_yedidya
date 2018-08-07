let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    mail: String,
    message: String,
    date: Date,
    gravatar: String
});

module.exports = mongoose.model('comment', commentSchema);