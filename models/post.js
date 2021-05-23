const mongoose = require('mongoose')
// import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    visibility: {
        type: String,
        required: true
    },

    postedBy: {
        type: String,
        required: true
    }

    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'User'
    // }
})

module.exports = mongoose.model('Post', PostSchema)