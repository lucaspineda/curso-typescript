"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
// @logarClasse
// @decorator({ a: 'Teste', b: 123 })
// @logarClasseSe(true)
// @logarObjeto
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
eletro.imprimir && eletro.imprimir();
// // Desafio Decorator perfilAdmin
// const usuarioLogado = {
//   nome: 'Guilherme Filho',
//   email: 'guigui@gmail.com',
//   admin: true
// }
// @perfilAdmin
// class MudancaAdministrativa {
//   critico() {
//       console.log('Algo crítico foi alterado!')
//   }
// }
// new MudancaAdministrativa().critico()
// function perfilAdmin<T extends Construtor>(construtor: T) {
//   return class extends construtor {
//       constructor(...args: any[]) {
//           super(...args)
//           if(!usuarioLogado || !usuarioLogado.admin) {
//               throw new Error('Sem permissão!')
//           }
//       }
//   }
// }
// class ContaCorrente {
//   @naoNegativo
//   private saldo: number
//   constructor(saldo: number) {
//       this.saldo = saldo
//   }
//   @congelar
//   sacar(@paramInfo valor: number) {
//       if(valor <= this.saldo) {
//           this.saldo -= valor
//           return true
//       } else {
//           return false
//       }
//   }
//   @congelar
//   getSaldo() {
//       return this.saldo
//   }
// }
// const cc = new ContaCorrente(10248.57)
// cc.sacar(5000)
// cc.sacar(5248.57)
// cc.sacar(0.1)
// console.log(cc.getSaldo())
// // cc.getSaldo = function() {
// //     return this['saldo'] + 7000
// // }
// console.log(cc.getSaldo())
// // Object.freeze()
// function congelar(alvo: any, nomeMetodo: string,
//   descritor: PropertyDescriptor) {
//   console.log(alvo)
//   console.log(nomeMetodo)
//   descritor.writable = false
// }
// function naoNegativo(alvo: any, nomePropriedade: string) {
//   delete alvo[nomePropriedade]
//   Object.defineProperty(alvo, nomePropriedade, {
//       get: function(): any {
//           return alvo["_" + nomePropriedade]
//       },
//       set: function(valor: any): void {
//           if(valor < 0) {
//               throw new Error('Saldo Inválido')
//           } else {
//               alvo["_" + nomePropriedade] = valor
//           }
//       }
//   })
// }
// function paramInfo(alvo: any, nomeMetodo: string,
//   indiceParam: number) {
//   console.log(`Alvo: ${alvo}`)
//   console.log(`Método: ${nomeMetodo}`)
//   console.log(`Índice Param: ${indiceParam}`)
// }
//# sourceMappingURL=decorators.js.map