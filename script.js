const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./route/staticData"));
app.use(require("./route/Dynamic"));

app.get("*", (req, res) => {
    res.json("No Route Available");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
