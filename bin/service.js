"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_express_1 = require("./service/ws-express");
const chatBot_1 = require("./routes/chatBot");
const webSocket_1 = require("./routes/webSocket");
ws_express_1.app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
ws_express_1.app.use("/chat", chatBot_1.chatBot);
ws_express_1.app.use("/ws", webSocket_1.wsRouter);
const port = +process.env.PORT || 3000;
ws_express_1.app.listen(port, () => {
    console.log('express server is starting at port 3000.....');
});
