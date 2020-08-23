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
//# sourceMappingURL=classes.js.map