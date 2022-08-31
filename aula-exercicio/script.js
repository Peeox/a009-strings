//Peça ao usuário a inserir seu nome e cor favorita

/*
let inserirNome = prompt("Qual é o seu nome?")

let inserirCorFavorita = prompt("Qual é a sua cor favorita?")
*/

//Mensagem impressa com concatenação

/*const frase = "A cor favorita de " + inserirNome + " é " + inserirCorFavorita +"."

console.log(frase)
*/

//Mensagem impressa com template string

// console.log(`A cor favorita de ${inserirNome} é ${inserirCorFavorita}.`)

// Altere a primeira string para que a pessoa também envie sua sitação favorita

/*
const citacao = prompt("Qual é sua citação favorita")

console.log("A cor favorita de " + inserirNome + " é " + inserirCorFavorita
+ " e a citação favorita é \"" + citacao + "\"")

*/

// Altere a template String conforme solicitado

/*
console.log(`Nome: ${inserirNome} \nCor favorita: ${inserirCorFavorita}`)
*/

//Faça com que o nome da pessoa seja exibido em letras maíusculas

/*
const nomeMaiusculo = inserirNome.toUpperCase()

console.log(`Nome: ${nomeMaiusculo} \nCor favorita: ${inserirCorFavorita}`)
*/

//Exiba no console a quantidade de letras no nome da pessoa

/*
console.log(`Quantidade de caracteres: ${inserirNome.length}`)

*/

// Cheque se o nome da pessoa possui a letra "A"

/*
const verificaLetra = inserirNome.includes("a")

console.log("O nome possui a letra A? " + verificaLetra)
*/

const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu e-mail?")

const frase = (`O e-mail ${email} foi cadastrado com sucesso. Boas vindas ${nome}!
\nA quantidade de caracteres do seu nome é: ${nome.length}`);

const novaFrase = frase.replaceAll("r", "l")
const verifica = email.includes("@")

console.log(novaFrase)
console.log("tem @?", verifica);