import { type } from "os"

function echo(objeto: any) {
  return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ nome: 'João', idade: 27 }))

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
  return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome)

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string, idade: number }>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Cicrano', idade: 23 },
  { nome: 'Beltrano', idade: 24 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Cicrano', idade: 23 },
  { nome: 'Beltrano', idade: 24 }
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T,
    public operando2: T) {}

  abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())
// console.log(new OperacaoBinaria({}, null).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 434).executar())

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

class MyQueue<T extends string | number> {
  private queue: Array<T>

  constructor(...args: T[]) {
    this.queue = args
  }

  PushToQueue(element: T): void {
    this.queue.push(element)
  }

  next(): T {
    this.queue.splice(0, 1)
    return this.queue[0]
  }

  print(): void {
    console.log(this.queue)
  }
}

const q1 = new MyQueue<number>(4,5);
q1.PushToQueue(6);
q1.next()
q1.print()

// // Desafio Mapa
// // Array de Objetos (Chave/Valor) -> itens
// // Métodos: obter(Chave), colocar({ C, V })
// // limpar(), imprimir()


type Obj<T,R> = { chave: T , valor: R };

class Mapa<T, R> {
  private objs: Array<Obj<T,R>>;
  constructor(){
    this.objs = new Array<Obj<T,R>>()
  }
  public obter(chave: T): Obj<T,R> | null {
    const resultado = this.objs.filter((element) => {
      console.log(element);
      return element.chave == chave
    })
    return resultado ? resultado[0] : null;
  }

  public colocar(obj: Obj<T,R>) {
    const resultado = this.obter(obj.chave)
    resultado ? resultado.valor = obj.valor : this.objs.push(obj)
  }

  public limpar(): void {
    this.objs.splice(0, this.objs.length)
  }

  public imprimir(): void {
    console.log(this.objs)
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()