const express = require('express');
const router = new express.Router();
const model = require('./../Models/model');

router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;