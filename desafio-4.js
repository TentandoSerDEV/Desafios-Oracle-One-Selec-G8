console.log('Bem vindo ao nosso programa!');

let nome = 'Renan'; 
console.log(`Olá, + ${nome}!`);

let linguagem = prompt('Qual linguagem de programação você mais utiliza?');
console.log(`Que legal! Você utiliza ${linguagem}!`);

let valor1 = 34;
let valor2 = 55;
let resultado = valor1 + valor2;
console.log(`O resultado da soma de ${valor1} e ${valor2} é ${resultado}`);

let idadeUsuario = prompt('Quantos anos você tem?');
if (idadeUsuario >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

let numero = prompt('Digite um número');
numero = parseInt(numero);
if (numero > 0) {
    console.log('Este número é positivo');
} else if (numero < 0) {
    console.log('Este número é negativo');
}

let numeros = 0;
while (numeros <= 10) {
    console.log(numeros);
    numeros++;
}

let numerosAleat = Math.random();
console.log(numerosAleat);

let numerosAle = Math.random() * 10 + 1;
console.log(numerosAle);

let numeroAlea = Math.random() * 1000 + 1;
console.log(numeroAlea);
