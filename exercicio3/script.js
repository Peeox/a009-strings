//Crie a const para a frase aqui

//Feito a separação da frase em 2 variáveis para o exercício extra

const frase1 = "\"BOAS VINDAS, mas não deixe o gato sair\""

/*Mudei a string para template string para linkar a variável frase1
e coloquei .toUpperCase() para deixar tudo em letra maiúscula
*/

const frase = `Jorge tem uma casa verde e com portão azul, 
com os dizeres: ${frase1.toUpperCase()}`

/* Uma nova constante para fazer a mudança das palavras
Verde --> Rosa
Azul  --> Laranja
*/

const novaFrase = frase.replace("verde" , "rosa").replace("azul" , "laranja")

//Imprime conforme solicitado

console.log(novaFrase);