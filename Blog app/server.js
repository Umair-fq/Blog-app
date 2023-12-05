const http = require('http');
const fs = require('fs')
const _ = require('lodash');



const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';

    // lodash
    // const a = _.random(-1, 2000);
    // console.log(a)  

    // const greet = _.once(() => {
    //     console.log('Hello');
    // })

    // greet()
    // greet();

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            path += 'index.html';
            break;
        case '/about':
            res.statusCode = 200;
            path += 'about.html';
            break;
        case '/aboutme':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            res.statusCode = 404;
            path += '404.html';
            break;
    }

    fs.readFile(path,(err, data) => {
        if (err) {
            console.log(err);
        } else {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log("listening on port 3000");
});
