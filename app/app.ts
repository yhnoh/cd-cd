import express, {Request, Response, NextFunction} from "express";

const app = express();

app.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello World!");
})

app.listen(8000, () => {
    const log = `
        #############################
        Server Listening on port 8080
        #############################
    `;
    console.log(log);
});