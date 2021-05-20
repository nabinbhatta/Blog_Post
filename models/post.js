const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    postedBy: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', PostSchema)