class Data {
  // publico por padrao
  dia: number
  mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)

const casamento = new Data //pode-se omitir os parenteses devido ao valor padrao

class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
  }
} // exatamento a mesma classe porem declarado de forma mais curta

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)

const casamentoEsperto = new DataEsperta //pode-se omitir os parenteses devido ao valor padrao

class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0) {

  }

  public resumo() : string {
    return `${this.nome} custa ${this.preco } e com desconto: ${this.precoComDesconto()}`
  }

  // tbm é public
  precoComDesconto() : number {
    return this.preco * (1 - this.desconto)
  }
}

const produto1 = new Produto('Caneta bic', 4.20, 0.9)
console.log(produto1)
console.log(produto1.resumo())

class Carro {
  private velocidadeAtual: number = 0

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){
     
  }

// protected é transmitido por herença
// private nao eh transmitido por herença
// public é visivel para todos

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    if(velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }
    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }

}

const carro1 = new Carro('Ford', 'ka', 100)
console.log(carro1.acelerar());
// console.log(carro1.alterarVelocidade()); //este metodo nao pode ser acessada pois é privada.

// Herança

class Ferrari extends Carro {
  constructor (modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }

  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }

}

const f40 = new Ferrari('f40', 324)

console.log(f40)
console.log(f40.acelerar())


// Getters & Setters
class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }

  set idade(valor: number) {
    if(valor >= 0 && valor <= 120) {
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3 // essa alteração nao fara nenhum efeito
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))

// Classe abstrata
abstract class Calculo {
  protected resultado: number = 0

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  //  classe filha deve implementar os metodos abstratos da classe pai
  executar(...numeros: number[]): void {
      this.resultado = numeros.reduce((t, a) => t + a)
  }
}
// Não é possivel instanciar uma classe abstrata

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
      this.resultado = numeros.reduce((t, a) => t * a)
  }
}

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

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
