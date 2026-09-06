

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

// exemplo de if e  else

let idadeVotar = 88;

if(idadeVotar >= 88){
    console.log("Permitido para votar!")
} else {
    consolelog('Não Permitido para votar')
}


// Exemplo sobre as diferenças de == e ===

let idadeMinima = 18;
let idadeDigitada = "18";

if(idadeDigitada == idadeMinima){
    console.log("Passou no teste do ==")
}

if(idadeDigitada === idadeMinima){
    console.log("Passou no teste do ===")
} else{

    console.log("Barrado no === porque um é número e o outro é texto!")
}


/**
 * OPERADORES MULTI-CONDICIONAIS (RESUMO)
 * 
 * E (&&): Só dá TRUE se TODAS as condições forem verdadeiras.
 * OU (||): Dá TRUE se pelo menos UMA condição for verdadeira.
 * NÃO (!): Inverte o valor lógico (TRUE vira FALSE e vice-versa).
 */


// ========================================================
// REVISÃO DO SEU EXERCÍCIO 1 (Operador &&)
// ========================================================
let rendaMinima = true;
let nomelimpo = true;

// 💡 O QUE VOCÊ FEZ: Criou a lógica 100% correta e funcional!
// ❌ O QUE ERROU: Nada de lógica. Apenas escreveu "=== true", que funciona, mas é redundante.
// 🔧 DICA: Pode usar o atalho deixando apenas: if (rendaMinima && nomelimpo)
if(rendaMinima === true && nomelimpo === true){
    console.log("Seu nome está limpo"); // (Apenas a mensagem poderia focar no "Empréstimo Aprovado")
} else {
    console.log("Seu nome não esta limpo");
}


// ========================================================
// REVISÃO DO SEU EXERCÍCIO 2 (Operador ||)
// ========================================================
let estudante = false;
let temCupom = true;

// 💡 O QUE VOCÊ FEZ: Perfeito! Aplicou o atalho e usou o || corretamente.
// ❌ O QUE ERROU: Absolutamente nada. Código limpo e padrão de mercado.
if(estudante || temCupom){
    console.log("Você tem direito a desconto!");
} else {
    console.log("Preço inteira.");
}


// ========================================================
// REVISÃO DO SEU EXERCÍCIO 3 (Mistura de && e ||)
// ========================================================
let idadeMinima = 18;
let convite = true;

// 💡 O QUE VOCÊ FEZ: Entendeu bem que precisava usar o && e o || juntos.
// ❌ O QUE ERROU: Deixou o operador "||" solto no final sem uma condição depois dele, 
//    o que quebra o código (Erro de Sintaxe). Também esqueceu de agrupar o OU com parênteses ( ).
// 🔧 CORREÇÃO: O certo seria: if (idadeMinima >= 18 && (convite || estaNaLista))
if(idadeMinima >= 18 && convite ||) { // <-- Esse || no fim causou o erro
    console.log("Permissão para entrar na festa");
} else {
    console.log("Entrada não permitida");
}











