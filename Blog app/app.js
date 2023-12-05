const express = require('express');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoute = require('./routes/BlogRoutes')
const app = express();

dbURI = "mongodb://umair:umair@ac-uk413zu-shard-00-00.etdq3lc.mongodb.net:27017,ac-uk413zu-shard-00-01.etdq3lc.mongodb.net:27017,ac-uk413zu-shard-00-02.etdq3lc.mongodb.net:27017/?ssl=true&replicaSet=atlas-b1037x-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
   .then((result) => {
    console.log("DB connected successfully")
    app.listen(3000);
   })
   .catch((error) => {
    console.log(error)
   })

app.set('view engine', 'ejs');


// app.get('/saveblog', (req, res) => {
//     const blog = new Blog({
//         title: "naya blog",
//         snippet: "program to werr gaya",
//         body: "human readable blog description here https://github.com/ especially awesome"
//     })
//     blog.save()
//     .then ((result) => {
//         res.send(result)
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// });

app.use(express.urlencoded({ extended: true}));

// custom middleware
// app.use((req, res, next) => {
//     console.log('logs using middleware')
//     console.log('body: ', req.body);
//     console.log('query: ', req.query);
//     console.log('host: ', req.hostname)
//     console.log('method: ', req.method)
//     next();
// })



// blog routes
app.use('/blogs', blogRoute)

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname})
    res.render('404')
});