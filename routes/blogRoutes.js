const express = require('express');
const blogController = require('../controllers/blogController')
const router = express.Router();
const UserModel = require('../models/Users')

router.get("/all-blogs", blogController.all_blogs);
router.get("/getUsers", (req, res) =>{
    UserModel.find({}, (err, result) =>{
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.get('/add-blog', blogController.add_blog);

router.get('/test', (req, res) =>{
    res.json({msg: 'Hello'});
})
module.exports = router;