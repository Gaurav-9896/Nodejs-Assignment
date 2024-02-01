"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
//controller routes
app.get("/", (req, res) => {
    res.send("Welcome to express");
});
app.listen(3000, () => console.log("listening to port "));
