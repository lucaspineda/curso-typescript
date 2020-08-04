"use strict";
// let & const
let estaFrio = true;
if (estaFrio) {
    let acao = 'colocar casaco';
    console.log(acao);
}
// console.log(acao) - nao pode pois let tem escopo de bloco, funcao e global
// consts nao podem ser redeclaradas
// const tbm tem escopo de bloco, funcao e global
// var nao apenas nao tem escopo de bloco
// Arrow Function:
// com arrow function é possivel deixar o retorno implicito
const substrair = (n1, n2) => n1 + n2;
// tbm deixa a sintaze reduzida
// this
function normalFunction() {
    // console.log(this)
}
const normalFunctionComBindDoThis = normalFunction.bind(2);
normalFunctionComBindDoThis();
// this??
// console.log(this)
// o this é relativo ao this anterior
// o this nunca muda aqui, mesmo usando o bind
// const arrowFunction = () => console.log(this)
// arrowFunction()
// PArametro padrao
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
}
contagemRegressiva();
// operador rest e spread
// spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
// rest
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 56);
console.log(numeros);
// operador rest e spread (tupla)
const tupla = [1, 'abc', false];
function tuplaParam(...params) {
    console.log(params[0], params[1], params[2]);
}
tuplaParam(...tupla);
// Destructuring(Array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
// Destructuring(Obj)
const item = {
    nome: 'ssd 480gb',
    preco: 200
};
const { nome: nm } = item;
console.log(nm);
//# sourceMappingURL=ecmascript.js.map