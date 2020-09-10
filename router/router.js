const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html");
});

router.get("/post", (req, res) => {
    res.render("post.html");
});

router.post("/post", (req, res) => {
    res.render("post.html");
    console.log(JSON.stringify(req.body));
});

module.exports = router;