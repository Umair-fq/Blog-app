const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blogControllers');


router.get('/', blogControllers.getBlogs)

router.get('/about', blogControllers.about)

router.get('/create', blogControllers.createGetBlog);

router.get('/:id', blogControllers.blogDetails);

router.delete('/:id', blogControllers.deleteBlog);


router.post('/', blogControllers.createPostBlog);

module.exports = router;