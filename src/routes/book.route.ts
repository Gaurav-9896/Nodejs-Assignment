import { Router,Request,Response } from "express";

const bookRouter = Router();
bookRouter.get("/findAll", (req:Request ,res:Response)=>{
  res.send("This route will send all the books");
});
bookRouter.get("/",(req:Request,res:Response) =>{
    res.send("Welcome to express")
});

bookRouter.post("/add",(req:Request,res:Response) =>{
    res.send("book add request")})



//route paths string patterns
bookRouter.get("ab*cd",(req:Request,res:Response) =>{
    res.send("Welcome to express")
});

//Route Parameters
bookRouter.get("/params/:userId/:BookId/:BookName",(req:Request,res:Response) =>{
    
    console.log(req.params);
    res.json(req.params);
});



export default bookRouter;