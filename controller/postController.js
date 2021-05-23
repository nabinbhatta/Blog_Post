const Post = require("../models/post");

const createPost = async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    visibility: req.body.visibility,
    postedBy: req.body.postedBy,
  });
  try {
    const post = await newPost.save();
    res.send(post);
  } catch (error) {
    console.log(error);
  }
};

const getPost = async(req, res) => {
    const {userID} = req.query;
    if(!userID) {    
        const post = await Post.find();
        res.send(post);
        
    }
    else{
        const post = await Post.findById(userID);
        res.send(post);
    }

}
exports.createPost = createPost;

exports.getPost = getPost;
