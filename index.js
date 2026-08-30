// Importando os elementos nomeados (dentro de chaves) e o elemento padrão (fora das chaves)
// Atenção: no Node.js com ESModules, a extensão do arquivo (.js) é obrigatória na importação local!
import Aluno, { num1, num2, titulo, vet, obj, soma, subtrair } from './ferramentas.js';

console.log("--- Executando testes de importação ---");

// Testando a constante e as variáveis:
console.log("Título do App: " + titulo);
console.log("A soma de num1 e num2 é: " + (num1 + num2));

// Testando a função tradicional e a arrow function:
console.log("Resultado da função soma(10, 20): " + soma(10, 20));
console.log("Resultado da arrow function subtrair(20, 5): " + subtrair(20, 5));

// Testando o vetor:
console.log("Primeiro elemento do vetor: " + vet[0]);
console.log("Vetor completo: ", vet);

// Testando o objeto:
console.log("Dados do objeto - ID: " + obj.id + ", Nome: " + obj.nome);

// Testando a classe (instanciando o objeto Aluno):
const novoAluno = new Aluno("Carlos");
novoAluno.cumprimentar();