import * as express from "express"
// import {app} from "../service/ws-express"
import {Findway} from "../service/DispatchCommand"




let wsRouter=express.Router();

wsRouter.ws("/",(ws,req)=>{
    console.log(111111111111111111111);
    ws.on('message',(message:string)=>{
        console.log("\n %s",message);
        console.log(JSON.parse(message));
        let obj=JSON.parse(message);
        // let obj=eval(message);
        // obj['msg']="you say:"+obj['msg'];
        obj.msg="you say:"+obj.msg;
        let result=Findway(obj.msg);
        ws.send(JSON.stringify(result));
    });
});


export {wsRouter};