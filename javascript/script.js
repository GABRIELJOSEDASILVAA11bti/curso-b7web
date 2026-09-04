//Exercício 1: Gerador de E-mail de Boas-VindasO que fazer: Crie três variáveis: nomeCliente, cursoComprado e linkAcesso. Use uma Template String para criar uma mensagem com múltiplas linhas (pressione Enter dentro das crases para quebrar a linha naturalmente no código). -- EXERCICIO SOBRE :Strings e Tamplate String

alert("Olá,Mundo!") // serve para aparecer uma msg na tela principal do usuario

console.log("Olá,Mundo!")// aparece apenas no console(que está no botão inspecionar),serveria pra verificar um tipo de conta por exemplo.


//VARIAVEIS

// O (let) serve para criar uma variavel,tanto nome quanto numero. Oque muda é as aspas.

let nome = "Victor Ikenny"
let idade = 15
let hobby = "Jogar bola"

console.log(nome)
console.log(idade)
console.log(hobby)

//Tipos de dados JavaScript

//boolean: valores lógicos que podem ser apenas verdadeiro (true) ou falso (false).

let idade15 = false
let idade16 = true

//String: textos escritos entre aspas, como "olá".

let introdução = "é um prazer estar aprendendo javascript"

// Number: números, sejam inteiros ou com pontos decimais, como 10 ou 3.14.

let quantidade = 18
let valor = 15.88

// Array: uma estrutura de dados que armazena uma coleção de elementos.

let listadcompra = ["maça", "banana", "laranja", "feijão", "arroz"]

// Object: armazena dados nomeados através de propriedades e métodos.

let usuario = { nome: "Ana", idade: 30 };

//exercicios

//exercicio-1 :  Crie uma variável para armazenar o nome do carro e ponha o valor Ferrari. E exiba-a.

let carro = "ferrari"
console.log(carro)
//esqueci de colocar console.log e chamar a variavel.
//Ficaria:  console.log(carro)

// 2. Crie uma variável para armazenar o preço do bolo, que custa R$ 19,99. E exiba-a.

let bolo_preco = 19.99
console.log("bolo_preco é igual a ", bolo_preco ) //Aqui me embolei todo, confundi com python.

// 3. Corrija o código a seguir (e exiba-o). let "cidade" = São Paulo

let cidade = "Sao Paulo"
console.log(cidade)
 // esqueci de colocar console.log e de chamar a variavel.Se tiver no codigo, é pq ajustei.

 


// CÁLCULO E EXIBIÇÃO DO NOVO SALÁRIO COM AUMENTO
let salarioAtual = 2000;
let aumento = 300;
let novoSalario = salarioAtual + aumento

console.log("Valore do novo salário é :",novoSalario)

//Exercício 1: Gerador de E-mail de Boas-VindasO que fazer: Crie três variáveis: nomeCliente, cursoComprado e linkAcesso. Use uma Template String para criar uma mensagem com múltiplas linhas (pressione Enter dentro das crases para quebrar a linha naturalmente no código). -- EXERCICIO SOBRE :Strings e Tamplate String

let nomeCliente = "Gabriel";
let cursoComprado = "Programação web com gjota"
let linkAcesso = "https://programaçãoweb.com"



console.log(`Olá, ${nomeCliente}, !
Seu acesso ao curso, ${cursoComprado}, já está liberado.
Clique aqui para acessar:, ${linkAcesso}`)




//  Exercício 2: Criador de Tag HTML (Falso "Front-end")O que fazer: Simule a criação de um componente para um site. Crie as variáveis tituloArtigo, autor e data. Use uma Template String para montar uma estrutura de texto simulando código HTML (usando as tags <h1> e <span>).Resultado esperado no console: "<h1>[tituloArtigo]</h1><span>Por: [autor] em [data]</span>"




let textoQualquer = "A arte de aprender";
let autor = "gjota briel";
let data = new Date(2026, 8, 4);

console.log(`<h1>, ${textoQualquer} </h1>, <span>, Por:, ${autor} em, ${data}, </span>`)