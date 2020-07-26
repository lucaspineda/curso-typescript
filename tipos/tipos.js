"use strict";
// string
var nome = 'João';
console.log(nome);
// nome = 23
// numbers
var idade = 27;
idade = 27.5;
console.log(idade);
// booleans
var possuioHobbies = false;
console.log(possuioHobbies);
// tipos explicitos
var minhaIdade;
// O tipo any tbm existe
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)
// array
var hobbies = ["Cozinhar", "Praticar esportes"];
// conteudo do array pode ser qualquer
hobbies = [100];
// hobbies = 100 
// tuplas
var endereco = ['Av principal', 99];
// let endereco: [string, number] = ['Av principal', 99, 654654] -> errado
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 5] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Laranja, Cor.Vermelho);
// any (evitar, mesmo que js)
var carro = 'ferrari';
carro = {
    marca: 'bmw',
    ano: 2019
};
console.log(carro);
// funcoes
function retornaMeuNome() {
    return carro;
    // return minhaIdade;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(1, 2));
// tipo funcao 
var calculo;
// calculo = digaOi - errado
// calculo()
calculo = multiplicar;
console.log(calculo(8, 9));
var usuario = {
    nome: 'joao',
    idade: 27
};
// desafio 01:
var funcionario = {
    supervisores: [
        'paula',
        'aline'
    ],
    batePonto: function (hora) {
        return hora < 8 ? 'normal' : 'fora';
    }
};
console.log(funcionario.batePonto(9));
var funcionario2 = {
    supervisores: [
        'biaa',
        'paula'
    ],
    batePonto: function (hora) {
        return hora < 8 ? 'normal' : 'fora';
    }
};
// Union types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
// checando tipos
var valor = 30;
//  o proprio compilador checa o tipo, nao precisa fazer a seguinte checagem igual no js:
if (typeof valor === "number") {
    console.log('é um number');
}
else {
    console.log(typeof valor);
}
