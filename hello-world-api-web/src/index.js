import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server rodando na porta 3000")
})