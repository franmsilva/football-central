const Post = require("../models/Post");


function createPost (req, res) {
    const { topic, body } = req.body;
    if(!topic || !body ) {
        res.send({
            type: "error",
            message: "Missing content in topic or body"
        })
    } else {
        
        let newPost = new Post({
            topic,
            body,
        }) 
            
            newPost.save()
            .then(post => {
                res.send({
                    post,
                    type: 'success',
                    message: 'You made a new post successfully.'
                })
            })
    }

        
};

function deletePost (req, res) {
    const { topic, body } = req.body;
    if(topic || body ) {
        res.send({
            type: "success",
            message: "Post Deleted."
        }).then(post => {
            Post.deleteOne({ topic, body }, function(err, result) {
                if (err) {
                  res.send(err);
                } else {
                  res.send(result);
                }
              });
        })
    }    
};
// SQL
// Gets all posts from db, data can be named anything.
function getAllPosts (req, res) {
    Post.find({})
        .then((posts, err) => {
            if(posts) {
                res.send({
                    type: "success",
                    allPosts: posts
                })
            }

            if(err) {
                res.send({
                    type: "error",
                    error: err
                })
            }
        });
}



module.exports = {
    createPost,
    getAllPosts,
    deletePost,
};