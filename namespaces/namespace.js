"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function Circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.Circunferencia = Circunferencia;
    function Retangulo(base, altura) {
        return base * altura;
    }
    Areas.Retangulo = Retangulo;
})(Areas || (Areas = {}));
// const PI = 2.99
console.log(Areas.Circunferencia(10));
console.log(Areas.Retangulo(10, 20));
// console.log(PI)
//# sourceMappingURL=namespace.js.map