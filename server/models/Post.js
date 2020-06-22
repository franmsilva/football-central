const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    
    body: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    });

const Post = mongoose.model('posts', PostSchema);



module.exports = Post;