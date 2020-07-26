const express = require("express");

const router = express.Router();

const userData = [
    { id: 1, name: "debug", company: "Google" },
    { id: 2, name: "media", company: "Facebook" },
    { id: 3, name: "sanjay", company: "Microsoft" },
    { id: 3, name: "rahul", company: "Microsoft" },
];

router.get("/", (req, res) => {
    const query = parseInt(req.query.id);
    const userName = req.query.name;
    const filteredUserData = userData.filter((data) => {
        if (query || userName) {
            return data.id === query || data.name === userName;
        } else {
            return data;
        }
    });

    res.json(filteredUserData);
});

router.post("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userName = req.params.name;
    const filteredUserData = userData.filter((data) => data.id === userId);

    res.json(filteredUserData);
});

module.exports = router;
