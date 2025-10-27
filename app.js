// This app.js file takes the place of the server.js file and uses express

const express = require("express");
const morgan = require('morgan');

// express app
const app = express();

// register view engine
// NOTE - ejs always looks on the 'views folder' by default, otherwise you need app.set('views', 'folderName');
// NOTE - using ejs means that I will also need to change the files from say, index.html to index.ejs
app.set("view engine", "ejs");

// listen for requests
app.listen(8080);

// middleware and static files

app.use(express.static('public'))

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     // need to add next() or stuff hangs!
//     next()
// })

// using Morgan middleware to do what above code did...
app.use(morgan('dev'));

app.get("/", (req, res) => {
const information = [
  { title: "New Star Wars Movie?", snippet: "Not so veiled hints from a prominent director..." },
  { title: "Real Life Zombie!", snippet: "The first documented case of the undead..." },
  { title: "10 Odd Uses for Oatmeal", snippet: "Don't judge us, you need to know this..." },
];
  //   res.sendFile("./views/index.html", { root: __dirname });
  // NOTE - when using ejs, you need to render a view
  res.render("index", {
    title: "Home",
    // information: information
    // REMINDER - or, more succinctly as below
    information
  });
});

app.get("/about", (req, res) => {
  //   res.sendFile("./views/about.html", { root: __dirname });
  // NOTE - when using ejs, you need to render a view
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  //   res.sendFile("./views/contact.html", { root: __dirname });
  // NOTE - when using ejs, you need to render a view
  res.render("contact", { title: "Contact" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// redirects
app.get("/contact-me", (req, res) => {
  res.redirect("/contact");
});

// 404 page, .use is middleware, the order of middleware is IMPORTANT - must be placed below other routes! Requires a status code.
app.use((req, res) => {
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  // NOTE - when using ejs, you need to render a view
  res.status(404).render("404", { title: "404" });
});
