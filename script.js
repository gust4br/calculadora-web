var numeroAtual = "";
var num1 = null;
var num2 = null;
var atuacao = "";

var clickSomar = 0;
var calcConsole = document.getElementById('calcConsole')

function buttonNumber(num){
    numeroAtual += num
    atualizarConsole()
}

function atualizarConsole(){
    calcConsole.innerHTML = numeroAtual
}

function apagarButton(){
    numeroAtual = numeroAtual.slice(0, -1)
    atualizarConsole()   
}

function somarButton(){
    atuacao = "somar";
    if(num1 === null){
        num1 = parseFloat(numeroAtual)
        numeroAtual = "";
        atualizarConsole()
    }
}

function criarResultado(){
    var result;
    if(atuacao === "somar"){
        result = num1 + parseFloat(numeroAtual);
        numeroAtual = result.toString();
        atualizarConsole();
        num1 = null;
    }
}