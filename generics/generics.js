"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())
// console.log(new OperacaoBinaria({}, null).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());
// class DiferencaEntreDatas
//   extends OperacaoBinaria<Data, string> {
//   getTime(data: Data): number {
//     let { dia, mes, ano } = data
//     return new Date(`${mes}/${dia}/${ano}`).getTime()
//   }
//   executar(): string {
//     const t1 = this.getTime(this.operando1)
//     const t2 = this.getTime(this.operando2)
//     const diferenca = Math.abs(t1 - t2)
//     const dia = 1000 * 60 * 60 * 24
//     return `${Math.ceil(diferenca / dia)} dia(s)`
//   }
// }
// const d1 = new Data(1, 2, 2020)
// const d2 = new Data(5, 5, 2022)
// console.log(new DiferencaEntreDatas(d1, d2).executar())
// // Desafio Classe Fila
// // Atributo: fila (Array)
// // Métodos: entrar, proximo, imprimir
class MyQueue {
    constructor(...args) {
        this.queue = args;
    }
    PushToQueue(element) {
        this.queue.push(element);
    }
    next() {
        this.queue.splice(0, 1);
        return this.queue[0];
    }
    print() {
        console.log(this.queue);
    }
}
const q1 = new MyQueue(4, 5);
q1.PushToQueue(6);
q1.next();
q1.print();
class Mapa {
    constructor() {
        this.objs = new Array();
    }
    obter(chave) {
        const resultado = this.objs.filter((element) => {
            console.log(element);
            return element.chave == chave;
        });
        return resultado ? resultado[0] : null;
    }
    colocar(obj) {
        const resultado = this.obter(obj.chave);
        resultado ? resultado.valor = obj.valor : this.objs.push(obj);
    }
    limpar() {
        this.objs.splice(0, this.objs.length);
    }
    imprimir() {
        console.log(this.objs);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map