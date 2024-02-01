import  { Request, Response } from 'express';
import bookRouter from './routes/book.route';
import express = require("express");
import root from './routes/root.routes/root.routes';

const app = express();

//controller // routes
app.use("/", root);

app.listen(3000,()=> console.log("listening to port "))