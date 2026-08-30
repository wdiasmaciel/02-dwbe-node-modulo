# 02-dwbe-node-modulo

# Modularização

1. Quando começamos a construir sistemas back-end complexos, colocar todo o código em um único arquivo torna o projeto difícil de manter, testar e corrigir. 

2. A modularização é a prática de dividir o código em arquivos menores e especializados, em que cada arquivo possui uma única responsabilidade.

3. O padrão atual, adotado tanto no front-end (React, Angular) quanto no back-end (Node.js e TypeScript), são os ESModules (ECMAScript Modules), que utilizam as palavras-chave `import` e `export`.

4. Existem duas formas principais de compartilhar códigos entre arquivos no ecossistema JavaScript: **Exportações Nomeadas** (**Named Exports**) e **Exportações Padrão** (**Default Exports**).

---

# Exportações Nomeadas (Named Exports)

As exportações nomeadas são utilizadas quando queremos exportar múltiplos elementos (funções, variáveis, classes, etc.) de dentro de um mesmo arquivo.

A regra fundamental da exportação nomeada é: 

- Quem importa o código precisa saber o nome exato do elemento que foi exportado e deve obrigatoriamente utilizar chaves (`{ }`) no momento da importação.

Podemos exportar os elementos colocando a palavra `export` diretamente na frente da declaração de cada um deles.

---

# Exportação Padrão (Default Export)

A exportação padrão é utilizada quando um arquivo possui uma funcionalidade principal única (por exemplo, um arquivo que contém apenas uma classe controladora ou uma função de configuração).

Regras fundamentais da exportação padrão:

1. Um arquivo só pode ter uma única exportação padrão (`export default`).

2. Quem importa esse código **NÃO** utiliza chaves (`{ }`).

3. Quem importa pode dar qualquer nome para o elemento importado, embora a boa prática recomende manter o nome original para evitar confusão.

---

# Exemplo

Vamos estruturar um projeto em dois arquivos distintos dentro da mesma pasta.

## `Arquivo 1` (`ferramentas.js`):

1. O arquivo que exporta os elementos. 

2. Nesse arquivo, vamos declarar e exportar as variáveis, constantes, vetores, objetos, funções, arrow functions e classes.

```javascript
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
```

## Arquivo 2 (index.js):

1. O arquivo principal que importa e executa.

2. Neste arquivo, consumimos tudo o que foi criado no arquivo anterior. 

3. Observe a diferença: os itens nomeados ficam dentro de chaves, enquanto a classe (export default) fica fora das chaves e sem extensão especial.

```javascript
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
```

---

# Atividade

## Passo 1: 

Iniciar um projeto Node.js com as configurações padrões:

```bash
npm init -y
```

## Passo 2: 

Abrir o arquivo `package.json` gerado e habilitar o suporte a módulos, adicionando a seguinte linha logo abaixo do campo `main`:

```javascript
"type": "module",
```

**OBS**: caso o arquivo `package.json` tenha a linha abaixo, retire-a:
```javascript
  "type": "commonjs",
```

## Passo 3: 

Criar o arquivo chamado `ferramentas.js` e digitar todo o código contendo as variáveis, constante, funções, vetor, objeto e a classe Aluno conforme apresentado acima.

## Passo 4: 

Criar o arquivo chamado `index.js` e realizar as importações combinadas (Named e Default), seguidas pelos comandos de console.log para exibir os resultados, como apresentado acima.

## Passo 5: 

Executar o arquivo principal no terminal através do comando:

```bash
node index.js
```

## Passo 6

Incluir na chave `script` do arquivo `package.json` o comando abaixo:

```javascript
"start": "node index.js"
```

Versão final do arquivo `package.json`:
```javascript
{
  "name": "02-dwbe-node-modulo",
  "version": "1.0.0",
  "description": "1. Quando começamos a construir sistemas back-end complexos, colocar todo o código em um único arquivo torna o projeto difícil de manter, testar e corrigir.",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wdiasmaciel/02-dwbe-node-modulo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/wdiasmaciel/02-dwbe-node-modulo/issues"
  },
  "homepage": "https://github.com/wdiasmaciel/02-dwbe-node-modulo#readme"
}
```

Executar o comando abaixo:

```bash
npm run start
```

Executar o comando abaixo:

```bash
npm start
```

## Passo 7 (Provocação Didática): 

Remova a extensão `.js` do final da linha de importação no arquivo `index.js` (deixando apenas `'./ferramentas'`) e tente rodar novamente. 

O Node.js disparará um erro de módulo não encontrado. 

Ao contrário do desenvolvimento front-end com empacotadores (como Vite), o Node.js rodando puro no back-end exige explicitamente a extensão do arquivo para localização exata no disco.

---

# Exercícios 

## 1) Identificação de exportação
Crie um arquivo chamado `matematica.js` que exporte três constantes nomeadas: `pi`, `raio` e `areaCirculo`. Em seguida, importe essas constantes em um arquivo `app.js` que exiba a área de um círculo com raio 5. Para calcular a área de um círculo, utilize a fórmula A = π · r², em que A é a área, π (pi) vale aproximadamente 3,14 e r é o raio.

## 2) Diferença entre export default e named export
Crie dois arquivos: `pessoa.js` e `index.js`. Em `pessoa.js`, exporte uma variável chamada `nome` como padrão e uma constante chamada `profissao` como exportação nomeada. No arquivo principal, importe ambas e mostre no console o nome da pessoa e sua profissão.

## 3) Arrays e objetos em módulos
Crie um módulo `dados.js` contendo um vetor com 5 nomes de alunos e um objeto com dados pessoais de um aluno. Exporte ambos com `export`. Depois importe no arquivo principal e imprima no console: o primeiro nome do vetor e os dados do objeto em formato legível.

## 4) Função e arrow function no mesmo módulo
Crie um módulo `operacoes.js` com uma função tradicional `multiplicar(a, b)` e uma arrow function `dividir(a, b)`. Exporte os dois elementos. No arquivo principal, importe ambos e teste os resultados com valores diferentes, exibindo o retorno no console.

## 5) Diagnóstico de erro de módulo
Crie dois arquivos, `config.js` e `main.js`, e configure o projeto com `"type": "module"`. Em seguida, tente importar `./config` sem a extensão `.js` e observe o erro gerado pelo Node.js. Descreva em uma frase o motivo do erro e a correção necessária.

## 6) Desafio Final
Pesquise e explique, em 3 linhas, a diferença entre `Named Exports` e `Default Export` em Node.js com ESModules. Em seguida, monte um mini projeto com 3 arquivos (`dados.js`, `funcoes.js` e `index.js`) e teste a importação e a execução em terminal.

---
