export function textFormatter(valor, acao){
    if (acao == "lowercase"){
        return valor.toLowerCase();
    } else if (acao == "uppercase"){
        return valor.toUpperCase();
    }
}

export default { textFormatter };