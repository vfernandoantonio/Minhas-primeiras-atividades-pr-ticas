//exercício 1: Implementar em JavaScript um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares.
No console,como um alerta e no documento do HTML*/

let cotacaoAtual = Number(prompt("Informe a cotação do dolar:"));

let carteira = Number(prompt("Imforme o valor que você tem: "));

let opcao =Number(prompt("Informe o tipo de conversão \n1 REAL -> DOLAR -> \N2 DOLAR -> DOLAR -> REAL ->"))

if (opcao == 2) {
valorConvertido = cotacaoAtual * carteira;
} else {
    valorConvertido = carteira / cotacaoAtual;
}
alert (valorConvertido);

//exercício 2: Faça um programa em JS que leia um número inteiro informado pelo usuário e diga se esse número é par ou ímpar.
Sugestão: Use o % (resto da divisão inteira).*/

const numero = parseInt(prompt("Informe um número inteiro"));

if (numero % 2 === 0) {
console.log(`o número ${numero} é par.`);
} else {
 console.log(`o número ${numero} é impar`);   
}
    

//exercício 3:  Faça um programa que leia dois números e informe qual é o maior.
Ex. 
numero1 = 20
numero2 = 30
resposta = ‘O número2 é o maior’*/

let numero1 = Number(prompt("Informe o numero 1"));

let numero2 = Number("Informe o numero 2");

if (numero1 > numero2) {
    console.log(`o número ${numero1} é maior.`);
} else {
  console.log(`o número ${numero2} é maior.`);  
}

//exercício 4: Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.*/
let prova1 = Number(prompt("Informe a nota da prova"));
let prova2 = Number(prompt("Informe a nota da prova"));

if (prova1 >=6) {
console.log("Aluno aprovado");    
} else {
  console.log("Aluno aprovado"); 
}

if (prova2 >=6) {
    console.log("AlunO aprovado");
} else {
 console.log("Aluno aprovado");  
}

//exercício 5: Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.*/
Ingresso VIP sem pipoca: “Valor: 80 reais”;T
Ingresso VIP com pipoca: : “Valor: 110 reais”;
Ingresso standard sem pipoca: “Valor: 40 reais”;
Ingresso standard com pipoca: “Valor: 70 reais”;*/


// Obter o tipo de ingresso do usuário
let tipoIngresso = parseInt(prompt("Informe o tipo de ingresso(1 para VIP, 2 para standard): "));
 

// Obter a opção de combo de pipoca do usuário
let comboPipoca = parseInt(prompt("Deseja o combo de pipoca? (1 para sim, 2 para não): "));


// Calcular o valor do ingressode acordo com as opções


// Ingresso VIP
let valorIngresso;7
if (tipoIngresso ===1) {|
  if (comboPipoca ===1) {
    valorIngresso = 110;
} else {
 valorIngresso =80; 
}


//Ingresso standard
} else if (tipoIngresso ===2) {
  if (comboPipoca ===1) {
    valorIngresso = 70;
  } else {
    valorIngresso = 40;
} 
} else {
  console.log("opção inválida. Tente novamente!"); 
}


//Nenhuma opção
console.log(`Valor: ${valorIngresso} reais`);


//exercício 6:  Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. Antes de terminar, o código deve informar que irá ser encerrado.*/
console.log("Bem-vindo ao Chat!")

while true: 
mensagem =  input("EU: ")
if mensagem.Lowel() = "sair":
console.log("Tchau! o chat será encerrado.")
break

console.log("Robô: Olá! como posso ajudá-lo hoje?")

resposta = input("1 - Preciso de ajuda com um problema técnico\n2 - Quero saber mais sobre os nossos produtos\n3 - Gostaria de fazer uma reclamacao\nEscolha uma opcao: ")

if resposta = "1":

console.log("Robô: ok! Qual é o problema técnico que você  está enfrentando? ")
problema = imput("Eu: ")
console.log("robô: Entendi! Estou enviando um técnico para ajudá-lo.")
console.log("Tchau! O chat será encerrado.")
break

else if resposta = "2"

console.log(Robô: Nossa Linha de é muito variada! Qual produto você gostariade saber mais sobre? )
produto = input("Eu: ")
console.log("Robô: Ah, Ótimo escolha! O produto {} é um dos nossos mais populares.".format(produto))
console.log("Tchau! O chat será encerrado.")
break

else if resposta = "3"

console.log("Robo: Lamento ouvir que você está insatisfeito. Qual é o motivo da  reclamacao?")
reclacao = input("eU: ")
console.log("Robo: Entendi! Estou enviando um representante para resolver o problema.")
console.log("Tchau! O chat será encerrado.")
break

else:
console.log("Robô: Desculpe, não entendi. Por favor, escolha uma opcao válida.")

//exercício 7:A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um programa que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, 
caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 
*/


let horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas no mês:"));
let salarioPorHora = parseFloat(prompt("Digite o salário por hora:"));


let salarioTotal = 0;
if (horasTrabalhadas <= 160) { // 40 horas/sem x 4 semanas
  salarioTotal = horasTrabalhadas * salarioPorHora;
} else {
  let horasExtras = horasTrabalhadas - 160;
  let salarioExtras = horasExtras * salarioPorHora * 1.5;
  salarioTotal = 160 * salarioPorHora + salarioExtras;
}

console.log(`O salário total do funcionário é R$ ${salarioTotal.toFixed(2)}`);


/*Exercício 8: Elabore uma calculadora simples, levando em consideração dois números de entrada pelo usuário e uma opção de operação.
Pode ser utilizado o conceito do switch/case, IF/ELSE… e laço se já souber! 
*/

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let operacao = prompt("Digite a operação desejada (+, -, *, /):");


let resultado;
switch (operacao) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      alert("Erro: não é possível dividir por zero!");
    } else {
      resultado = num1 / num2;
    }
    break;
  default:
    alert("Erro: operação inválida!");
}

if (resultado !== undefined) {
  console.log(`O resultado da operação é: ${resultado}`);
}
