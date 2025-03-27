var matrizDeFrutas = ["Banana", "Maçã", "Mamão"]; // mamão banana e maçã são strings (string é um texto, cada vetor é uma string).

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString()); //

//editando vetores em uma matriz

matrizDeFrutas.splice(1,1,"Laranja");

console.log(matrizDeFrutas.toString());