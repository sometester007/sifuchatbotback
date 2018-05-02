import {Router,Request,Response,NextFunction}from "express"
import {Findway} from "../service/DispatchCommand"


let chatBot=Router();

chatBot.get("/",(req:Request,res:Response,next:NextFunction)=>{
    res.send('hello~~~~~~');
});

chatBot.get("/:search",(req:Request,res:Response,next:NextFunction)=>{
    console.log('in  get("/:search") function,param1 search is[%s]',req.params.search);

    let search=req.params.search;
    let way=Findway(search);
    console.log(way);
    res.json(way);
    
});

export {chatBot};