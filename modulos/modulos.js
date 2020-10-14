"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
// import retangulo from './retangulo'
// import { areaCircunferencia as circ } from './circunferencia'
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(8));
// console.log('Módulo carregado...')
// console.log(retangulo(7, 8))
// console.log(circ(2))
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map