"use strict";

var alunos = [{
  nome: "Zumbi dos Palmares",
  nota: 8
}, {
  nome: "D Pedro II",
  nota: 5
}, {
  nome: "Princesa Isabel",
  nota: 6
}, {
  nome: "Tiradentes",
  nota: 7
}, {
  nome: "Getúlio Vargas",
  nota: 3
}];
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosComNotaAcimaDeSeis = alunosAprovados(alunos);
console.log(alunosComNotaAcimaDeSeis);