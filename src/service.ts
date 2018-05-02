import {app} from "./service/ws-express"
import { chatBot } from "./routes/chatBot"
import { wsRouter } from "./routes/webSocket"


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use("/chat", chatBot);
app.use("/ws", wsRouter);

const port=+process.env.PORT||3000;

app.listen( port , 'localhost', () => {
    console.log('express server is starting at port 3000.....');
})

