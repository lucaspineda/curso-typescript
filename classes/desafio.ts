// Exercício 1 - Classe
class Moto {
  public velocidade: number = 0;

  constructor(public nome: string) {
    this.velocidade = 0;
  }

  public buzinar(): void {
    console.log('Toooooooooot!')
  }

  public acelerar(delta: number): void {
    this.velocidade = this.velocidade + delta
  }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança

class objeto2D {
  public base: number = 0;
  public altura: number = 0;
}

class Retangulo extends objeto2D {
  public area(): number {
    return this.base * this.altura;
  }
}
const retangulo = new Retangulo()
retangulo.base = 5
retangulo.altura = 7

console.log(retangulo.area())

// Exercício 3 - Getters & Setters

class Estagiario {
  private _primeiroNome: string = '';

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(nome: string) {
    this._primeiroNome = nome
  }
}

const estagiario = new Estagiario;

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)