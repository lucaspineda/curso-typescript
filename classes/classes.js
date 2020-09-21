"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
const casamento = new Data; //pode-se omitir os parenteses devido ao valor padrao
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
} // exatamento a mesma classe porem declarado de forma mais curta
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
const casamentoEsperto = new DataEsperta; //pode-se omitir os parenteses devido ao valor padrao
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa ${this.preco} e com desconto: ${this.precoComDesconto()}`;
    }
    // tbm é public
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const produto1 = new Produto('Caneta bic', 4.20, 0.9);
console.log(produto1);
console.log(produto1.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // protected é transmitido por herença
    // private nao eh transmitido por herença
    // public é visivel para todos
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'ka', 100);
console.log(carro1.acelerar());
// console.log(carro1.alterarVelocidade()); //este metodo nao pode ser acessada pois é privada.
// Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('f40', 324);
console.log(f40);
console.log(f40.acelerar());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3; // essa alteração nao fara nenhum efeito
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
// // Classe abstrata
// abstract class Calculo {
//   protected resultado: number = 0
//   abstract executar(...numeros: number[]): void
//   getResultado(): number {
//       return this.resultado
//   }
// }
// class Soma extends Calculo {
//   executar(...numeros: number[]): void {
//       this.resultado = numeros.reduce((t, a) => t + a)
//   }
// }
// class Multiplicacao extends Calculo {
//   executar(...numeros: number[]): void {
//       this.resultado = numeros.reduce((t, a) => t * a)
//   }
// }
// let c1: Calculo = new Soma()
// c1.executar(2, 3, 4, 5)
// console.log(c1.getResultado())
// c1 = new Multiplicacao()
// c1.executar(2, 3, 4, 5)
// console.log(c1.getResultado())
// class Unico {
//   private static instance: Unico = new Unico
//   private constructor() {}
//   static getInstance(): Unico {
//       return Unico.instance
//   }
//   agora() {
//       return new Date
//   }
// }
// // const errado = new Unico()
// console.log(Unico.getInstance().agora())
// // Somente Leitura
// class Aviao {
//   public readonly modelo: string
//   constructor(modelo: string,
//       public readonly prefixo: string) {
//       this.modelo = modelo
//   }
// }
// const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// // turboHelice.modelo = 'DC-8'
// // turboHelice.prefixo = 'PT-DEF'
// console.log(turboHelice)
//# sourceMappingURL=classes.js.map