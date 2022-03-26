// const express = require('express');
const Blog = require('../models/blogs');

const all_blogs = (req, res) => {
   console.log('asdf');
    // Blog.find()
    //     .then((result) => res.json(result))
    //     .catch(err => console.log(err))
}
const add_blog = (req, res) => {
    const blog = new Blog({
        title: 'new blog88..',
        snippet: '---new snippet---',
        body: 'body---'
    });
    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = {
    all_blogs,
    add_blog,
    
}
// module.exports = function(app){
//     app.get('/all-blogs', (req, res) => {
//         Blog.find()
//         .then((result) => {
//             res.json(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     });
//     app.get('/blog', (req, res) => {
//         Blog.findById('61da4348a83561f5e58d1a6c')
//         .then((result) => {
//             res.json({msg: 'Fetch Data', result})
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     });
//     app.get('/blog/:id', (req, res) => {
//         const blogId = req.params.id;
//         Blog.findById(blogId)
//             .then((data) => {
//                 console.log(data);
//                 res.json(data);
//             })
//             .catch(err => console.log(err));
//     });
//     app.post('/createBlog', (req, res) => {
//         // const title = req.body.title;
//         const blogObj = new Blog({
//             title: req.body.title,
//             snippet: 'hello',
//             body: 'ok...'
//         });
//         blogObj.save()
//             .then((response) => 
//                 res.json(response))
//             .catch((err) => console.log(err));
//     });
// }