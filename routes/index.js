var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Msg Board", messages: messages });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("form");
});

/* POST new message form. */
router.post("/new", function (req, res, next) {
  const msg = req.body.msg;
  const author = req.body.author;
  messages.push({ text: msg, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
