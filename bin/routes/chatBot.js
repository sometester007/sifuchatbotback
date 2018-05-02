"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DispatchCommand_1 = require("../service/DispatchCommand");
let chatBot = express_1.Router();
exports.chatBot = chatBot;
chatBot.get("/", (req, res, next) => {
    res.send('hello~~~~~~');
});
chatBot.get("/:search", (req, res, next) => {
    console.log('in  get("/:search") function,param1 search is[%s]', req.params.search);
    let search = req.params.search;
    let way = DispatchCommand_1.Findway(search);
    console.log(way);
    res.json(way);
});
