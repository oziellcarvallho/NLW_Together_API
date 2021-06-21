import express, { request, response } from "express";

const port = 8001;

const app = express();

app.get("/test", (request, response) => {
    return response.send("🎁\n");
});

app.post("/test_post", (request, response) => {
    return response.send("🎁\n");
})

app.listen(port, () => console.log(`Server runing in port ${port} 🟢`));