const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const Posts = require('../models/Post');

router.get('/',async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json(err)
    }
})

router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(data);
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.get('/:postId',async (req, res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post)
    }catch(err){
        res.json({message : err})
    }
})

router.delete('/:postId',async (req,res)=> {
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.postId)
        res.json(deletedPost)    
    }
    catch(err){
        res.json({message : err})
    }
})

router.patch('/:postId',async (req,res)=>{
    try{
        const updatedPost = await Post.updateOne({ _id : req.params.postId}, {
            $set : {
                title : req.body.title,
                description : req.body.description
            }
        })
        res.json(updatedPost)
    }
    catch(er){
        res.json({message : err})
    }
})

module.exports = router