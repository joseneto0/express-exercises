export function numFormatter(valor, acao){
    if (acao == "minimum"){
        return Math.min(...valor);
    } else if (acao == "maximum"){
        return Math.max(...valor);
    }
}

export default { numFormatter };