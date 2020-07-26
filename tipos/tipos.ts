// string

let nome: string = 'João'
console.log(nome)
// nome = 23


// numbers
let idade: number = 27
idade = 27.5
console.log(idade)

// booleans
let possuioHobbies: boolean = false
console.log(possuioHobbies)

// tipos explicitos
let minhaIdade: number
// O tipo any tbm existe
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = '27'
// console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar esportes"]
// conteudo do array pode ser qualquer
hobbies = [100]
// hobbies = 100 


// tuplas
let endereco: [string, number] = ['Av principal', 99]
// let endereco: [string, number] = ['Av principal', 99, 654654] -> errado

// enum
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 2, // 2
  Laranja, // 3
  Amarelo,
  Vermelho
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Laranja, Cor.Vermelho)


// any (evitar, mesmo que js)

let carro: any = 'ferrari'
carro = {
  marca: 'bmw',
  ano: 2019
}
console.log(carro)


// funcoes
function retornaMeuNome() :string {
  return carro;
  // return minhaIdade;
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA* numB;
}
console.log(multiplicar(1,2))


// tipo funcao 
let calculo: (numA: number, numB: number) => number
// calculo = digaOi - errado
// calculo()

calculo = multiplicar
console.log(calculo(8,9))

let usuario: { nome: string, idade: number} = {
  nome: 'joao',
  idade: 27
}

// usuario = {}
//  usuario = {
//   name: 'joao',
//   agr: 27
// }

// alias
type Funcionario = { supervisores: string[], batePonto: (hora: number) => string }

// desafio 01:
let funcionario: Funcionario = {
  supervisores: [
    'paula',
    'aline'
  ],
  batePonto(hora) {
    return hora < 8 ? 'normal' : 'fora'
  }
}

console.log(funcionario.batePonto(9))

let funcionario2: Funcionario = {
  supervisores: [
    'biaa',
    'paula'
  ],
  batePonto(hora) {
    return hora < 8 ? 'normal' : 'fora'
  }
}

// Union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'

// checando tipos
let valor = 30
//  o proprio compilador checa o tipo, nao precisa fazer a seguinte checagem igual no js:
if (typeof valor === "number") {
  console.log('é um number')
} else {
  console.log(typeof valor)
}

// funcao never

function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'sabao',
  preco: 8,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('precisa ter um nome')
    } if(this.preco <= 0) {
      falha('Preço inválido')
    }
  }
}

produto.validarProduto()