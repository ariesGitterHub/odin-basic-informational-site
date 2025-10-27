// NOTE: keep for reference.
// I decided to use express framework inside app.js for this project. Below is the vanilla Node.js code.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   // set header content type
//   res.setHeader('Content-Type', 'text/html');
//   //   res.write('<head><link rel='stylesheet' href='#'</head>')
//   //   res.write('<h1>hello, world</h1>');
//   //   res.write('<p>hello again, world</p>');
//   //   res.end();

//   let path = './views/';
//   switch (req.url) {
//     case '/':
//       path += 'index.html';
//       res.statusCode = 200;
//       break;
//     case '/about':
//       path += 'about.html';
//       res.statusCode = 200;
//       break;
//     case '/contact':
//       res.statusCode = 200;
//       path += 'contact.html';
//       break;
//     // redirect!
//     case '/contact-me':
//       res.statusCode = 301;
//       res.setHeader('Location', 'contact')
//       break;
//     default:
//       path += '404.html';
//       res.statusCode = 404;
//       break;
//   }

//   // send an html file
// //   fs.readFile('./views/index.html', (err, data) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // res.end();
//       res.end(data);
//     }
//   });
// });

// server.listen(8080, 'localhost', () => {
//   console.log('listening for requests on port 8080');
// });
