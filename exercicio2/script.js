const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//A - Removido o excesso de espaços com uma variável nova criada

const stringNova = minhaString.trim()

/*B - Primeiro log serve para mostrar o número de caracteres
com os espaços e o segundo, para mostrar o número sem espaços.
*/

console.log(minhaString.length)
console.log(stringNova.length)

//C- Feito um replaceAll para substituir a parte em branco.

console.log(stringNova.replace("________" , "sticioso"))