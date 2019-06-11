const express = require("express");
const stripe = require("stripe")("sk_test_LCwlgZu3SBDKwfIHkZo9kw2x00SjMcYvQ2");

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})

app.get("/", (req, res)=>{
    res.render("index");
})
