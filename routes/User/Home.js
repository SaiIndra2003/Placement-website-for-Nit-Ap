const express = require("express");
const Router = express.Router();

Router.get("/",async function(req,res){
    res.render("index");
});

Router.use("/contact",require("./Contact"));
Router.use("/Companies",require("./Companies"));
Router.use("/Stories",require("./Stories"));

module.exports = Router;