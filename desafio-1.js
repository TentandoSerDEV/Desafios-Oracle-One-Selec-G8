alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let SaldoDisponivel = 1000;
let MensagemDeErro = 'Erro! Preencha todos os campos'
alert(MensagemDeErro);
nome = prompt('Qual é o seu nome?');
idade = prompt('Qual é a sua idade?');
if (idade >= 18) {
    alert('Você pode tirar a Habilitação');
}
else {
    alert('Você não pode tirar a Habilitação');
}