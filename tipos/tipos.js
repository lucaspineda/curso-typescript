"use strict";
// string
let nome = 'João';
console.log(nome);
// nome = 23
// numbers
let idade = 27;
idade = 27.5;
console.log(idade);
// booleans
let possuioHobbies = false;
console.log(possuioHobbies);
// tipos explicitos
let minhaIdade;
// O tipo any tbm existe
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)
// array
let hobbies = ["Cozinhar", "Praticar esportes"];
// conteudo do array pode ser qualquer
hobbies = [100];
// hobbies = 100 
// tuplas
let endereco = ['Av principal', 99];
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
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Laranja, Cor.Vermelho);
// any (evitar, mesmo que js)
let carro = 'ferrari';
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
let calculo;
// calculo = digaOi - errado
// calculo()
calculo = multiplicar;
console.log(calculo(8, 9));
let usuario = {
    nome: 'joao',
    idade: 27
};
// desafio 01:
let funcionario = {
    supervisores: [
        'paula',
        'aline'
    ],
    batePonto(hora) {
        return hora < 8 ? 'normal' : 'fora';
    }
};
console.log(funcionario.batePonto(9));
let funcionario2 = {
    supervisores: [
        'biaa',
        'paula'
    ],
    batePonto(hora) {
        return hora < 8 ? 'normal' : 'fora';
    }
};
// Union types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
// checando tipos
let valor = 30;
//  o proprio compilador checa o tipo, nao precisa fazer a seguinte checagem igual no js:
if (typeof valor === "number") {
    console.log('é um number');
}
else {
    console.log(typeof valor);
}
// funcao never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabao',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
// valores opcionar
let AlturaOpcional = 12;
AlturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '5454465',
    tel2: null
};
console.log(contato1.tel2);
let podeSerNulo = null;
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
