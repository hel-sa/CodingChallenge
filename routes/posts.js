const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get list of submitted feedbacks
router.get('/', async (req, res) => {
    console.log('sending back all submitted feedbacks');
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//Sumbitting feedback
router.post('/', (req, res) => {
    //console.log(req.body);
    
    const post = new Post({
        title: req.body.title,
        summary: req.body.summary
    });

    post.save()
        .then(result => {
            console.log("feedback submitted");
            res.send("Thank you for your feedback!");
        })
        .catch(err => {
            console.log(err);
        });
        

});


module.exports = router;