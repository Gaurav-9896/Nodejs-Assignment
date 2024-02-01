import { Router } from "express";
//resources
import bookRouter from "../book.route";

const root = Router();

root.use("/book", bookRouter);

export default root;