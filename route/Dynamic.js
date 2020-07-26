const express = require("express");

const router = express.Router();

const userArray = [];

router.post("/addUser", (req, res) => {
    userArray.push(req.body);

    console.log(userArray);

    res.json("Data has been added sucessfully");
});

router.get("/displayUser", (req, res) => {
    res.json(userArray);
});

module.exports = router;
