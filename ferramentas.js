// Exemplo A: variáveis simples (Exportação Nomeada): 
export var num1 = 3;
export let num2 = 5;

// Exemplo B: uma constante (Exportação Nomeada):
export const titulo = "Meu App";

// Exemplo C: um vetor (Exportação Nomeada):
export let vet = [true, 1, "Node.js", [6, 7], {'id': 1, 'nome': 'Ana'}];

// Exemplo D: um objeto literal (Exportação Nomeada):
export let obj = {"id": 1, "nome": "Ana"};

// Exemplo E: uma função tradicional (Exportação Nomeada):
export function soma(a, b) {return a + b;}

// Exemplo F: uma arrow function (Exportação Nomeada):
export const subtrair = (a, b) => a - b;

// Exemplo G: uma classe (Exportação Padrão / Default):
export default class Aluno {
    constructor(nome) {
        this.nome = nome;
    }
    cumprimentar() {
        console.log("Olá, " + this.nome);
    }
}