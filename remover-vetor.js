var matrizDeFrutas = ["Banana", "Maçã", "Mamão"]; // mamão banana e maçã são strings (string é um texto, cada vetor é uma string).

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString()); //

// removendo vetores de uma matriz:

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã");

matrizDeFrutas.splice(indexadorDoVetor, 1);

console.log(matrizDeFrutas.toString());