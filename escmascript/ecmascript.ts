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