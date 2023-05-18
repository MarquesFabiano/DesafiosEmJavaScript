/*Desafio: Contador de Palavras

Sua tarefa é criar uma função chamada contarPalavras(frase) que recebe uma string contendo uma frase e retorna um objeto com a contagem de cada palavra presente na frase.

Regras:

As palavras na frase são separadas por espaços.
A contagem das palavras deve ser case-insensitive, ou seja, "gato" e "Gato" devem ser consideradas a mesma palavra.
O objeto retornado deve ter as palavras como chaves e o número de ocorrências como valor. */

function contarPalavras(frase) {
    const palavras = frase.split(" ");
    const contagem = {};

    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i].toLowerCase(); 
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    }

    return contagem;
}
console.log(contarPalavras("O gato caçou o rato e o rato fugiu"));
