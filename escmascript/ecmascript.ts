// let & const

let estaFrio = true
if(estaFrio) {
  let acao = 'colocar casaco'
  console.log(acao)
}
// console.log(acao) - nao pode pois let tem escopo de bloco, funcao e global

// consts nao podem ser redeclaradas

// const tbm tem escopo de bloco, funcao e global

// var nao apenas nao tem escopo de bloco


// Arrow Function:

// com arrow function é possivel deixar o retorno implicito

const substrair = (n1: number, n2: number) : number => n1 + n2

// tbm deixa a sintaze reduzida

// this

function normalFunction() {
  // console.log(this)
}

const normalFunctionComBindDoThis = normalFunction.bind(2)
normalFunctionComBindDoThis()

// this??
// console.log(this)
// o this é relativo ao this anterior
// o this nunca muda aqui, mesmo usando o bind
// const arrowFunction = () => console.log(this)
// arrowFunction()

// PArametro padrao
function contagemRegressiva(inicio: number = 3, fim: number = inicio - 5): void {
  console.log(inicio)
  while(inicio >= fim) {
    inicio--
    console.log(inicio)
  }
}

contagemRegressiva()

// operador rest e spread

// spread

const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

// rest

function retornaArray(...args: number[]): number[] {
  return args
}

const numeros = retornaArray(1,2,3,56)
console.log(numeros)

// operador rest e spread (tupla)

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam(...params: [number, string, boolean]) {
  console.log(params[0], params[1], params[2])
}

tuplaParam(...tupla);

// Destructuring(Array)

const caracteristicas = ['Motor Zetec 1.8', 2020]
const [motor, ano] = caracteristicas

console.log(motor)

// Destructuring(Obj)

const item = {
  nome: 'ssd 480gb',
  preco: 200
}

const { nome: nm } = item
console.log(nm)

// Exercicios Ecmascript //

// Exercicio 1
// var dobro = function(valor) {
//   return valor * 2
// }

// resposta: 

const dobro = (valor: number) : number => valor * 2

console.log(dobro(10))

// Exercicio 2
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome)
// }

const dizerOla = (nome: string = 'Pessoa') => {
  console.log("Ola, " + nome)
}

dizerOla()
dizerOla("Anna")

// Exercicio 3
// var nums = [-3, 33, 38, 5]

// resposta
var nums: number[] = [-3, 33, 38, 5]

console.log(...nums)

// Exercicio 4
var array = [55, 20]

console.log(array)

// Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 

// resposta
const notas: number[] = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// Exercicio 6
// const cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia

// Exercicio 6 resposta
const cientista = {primeiroNome: "Will", experiencia: 12}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)

// callback

function esperar3s(callback) {
  setTimeout(() => {
    callback('3 segundos depois;;;')
  }, 3000);
}

esperar3s(function(resultado) {
  console.log(resultado)
})

// const resultado = esperar3s()
// console.log(resultado) //retorna undefined


// promise

function esperar3spromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('3 segundos depois;;;')
    }, 3000);
  })
}

esperar3spromise()
  .then(dado => console.log(dado))
  // com promises as chamadas sao melhores encadeadas, pode usar multiplos then


