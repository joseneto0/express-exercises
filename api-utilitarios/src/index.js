import express from "express";
import { textFormatter } from "../utils/text.js";
import { numFormatter } from "../utils/num.js";
const app = express();

app.use(express.json());

app.post("/util/text/:util", (req, res) => {
    const action = req.params;
    const valor = req.body;
    const saida = {
        action: action.util,
        input: valor.input,
        output: textFormatter(valor.input, action.util)
    }
    res.send(saida);
});


app.get("/util/number/:action", (req, res) => {
    const action = req.params;
    const valores = req.query.input.split(",");
    const saida = {
        action: action.action,
        input: valores,
        output: numFormatter(valores, action.action)
    }
    res.send(saida);
});


app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
});