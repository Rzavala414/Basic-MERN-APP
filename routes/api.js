const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost.js');


router.get('/', (req,res) => {
    BlogPost.find({})
    .then(data => {
        console.log('data: ', data)
        res.json(data)
    })
    .catch(error => console.log('error:', error))
})

router.post('/save', (req,res) =>{
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save(error => {
        if(error){
            res.status(500).json({msg: 'Sorry, internal server errors'});
            return;
        }
        return res.json({msg: 'your data has been saved!!!'});
        
    });
  
});
   
module.exports = router;