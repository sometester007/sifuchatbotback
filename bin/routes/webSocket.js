"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import {app} from "../service/ws-express"
const DispatchCommand_1 = require("../service/DispatchCommand");
let wsRouter = express.Router();
exports.wsRouter = wsRouter;
wsRouter.ws("/", (ws, req) => {
    console.log(111111111111111111111);
    ws.on('message', (message) => {
        console.log("\n %s", message);
        console.log(JSON.parse(message));
        let obj = JSON.parse(message);
        // let obj=eval(message);
        // obj['msg']="you say:"+obj['msg'];
        obj.msg = "you say:" + obj.msg;
        let result = DispatchCommand_1.Findway(obj.msg);
        ws.send(JSON.stringify(result));
    });
});
