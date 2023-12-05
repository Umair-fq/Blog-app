const Blog = require('../Models/Blog');


const getBlogs = (req, res) => {
    // res.send('<p>hello</p>')
    // res.sendFile('./views/index.html', {root: __dirname});
    // sorting in descending order
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        // console.log(result);
        res.render('blog/index', {title: 'Blog App', blogs: result});
    })
    .catch((err) => {
        console.error(err);
    });
}

const about = (req, res) => {
    // res.send('<p>hello</p>')
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'})
}

const createGetBlog = (req, res) => {
    // res.redirect('/about');
    res.render('blog/create', {title: 'Create New Blog'})
}


const createPostBlog = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        console.log(result);
        res.redirect('/blogs')
    }) 
    .catch((err) => {
        console.error(err);
    }); 
}

const blogDetails = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('blog/blogdetail', {blog: result, title: "Blog Detail"});
    }) 
    .catch((error) => {
        console.error(error);
    }); 
}


const deleteBlog = (req, res) => {
    const id = req.params.id;
    // console.log('inside server')
    Blog.findByIdAndDelete(id)
    .then((result) => {
        //when we use ajax api, then we can not use render or redirect, so we will send json response
        res.json({redirect: '/blogs'});
    })
    .catch((error) => {
        console.error(error);
    });
}

module.exports = {
    getBlogs,
    about,
    createGetBlog,
    createPostBlog,
    blogDetails,
    deleteBlog
}