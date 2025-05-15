/*declaranod váriaveis*/
/*Criando uma função para cálculo de IMC*/
/*Comentário de bloco*/
//comentário de linha

function calcImc(){
    let altura = (document.getElementById("al").value)/100;//METRO
    let peso = document.getElementById("ps").value;

    // Converter para número
    altura = parseFloat(altura);
    peso = parseFloat(peso);


let imc = peso / (altura * altura);
window.alert('Seu IMC é:'+imc.toFixed(2));//Exibe com 2 casas
}
function alternarTema_claro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}
function alternarTema_escuro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}