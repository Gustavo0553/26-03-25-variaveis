var nomeDaVariavel = "Valor da Variável"; // Declara uma variável chamada nomeDaVariavel e atribui um valor a ela.

let nomeDaVariavelTemporaria = "Valor Temporário da Variável"; // Declara uma variável temporária que só pode ser usada dentro do bloco onde foi criada.

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variável"; // Declara uma constante que não pode ser alterada depois de definida.

console.log("nomeDaVariavel", nomeDaVariavel); // Imprime o nome e o valor da variável nomeDaVariavel no console.

console.log("nomeDaVariavelTemporaria", nomeDaVariavelTemporaria); // Imprime o nome e o valor da variável nomeDaVariavelTemporaria no console.

console.log("nomeDaVariavelSomenteLeitura", nomeDaVariavelSomenteLeitura); // Imprime o nome e o valor da constante nomeDaVariavelSomenteLeitura no console.

var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"]; // Cria um array chamado matriz com cinco elementos (strings).

// console.log("matriz, vetor1:", matriz[0]); // Linha comentada que, se ativada, imprimiria o primeiro elemento do array (vetor1).

for (let i = 0; i < matriz.length; i++) { // Início de um loop que percorre cada elemento do array matriz.
    console.log("matriz[" + i + "]:", matriz[i]); // Imprime o índice e o valor correspondente do array.
}

class Lampada { // Declara uma classe chamada Lampada.
    constructor(textura, volume, peso, cor, altura, largura, base, bulbo, filamento, contatoEletrico) { // Construtor que inicializa as propriedades da lâmpada.
        this.textura = textura; // Atribui o valor da textura à propriedade textura da lâmpada.
        this.volume = volume; // Atribui o valor do volume à propriedade volume da lâmpada.
        this.peso = peso; // Atribui o valor do peso à propriedade peso da lâmpada.
        this.cor = cor; // Atribui o valor da cor à propriedade cor da lâmpada.
        this.altura = altura; // Atribui o valor da altura à propriedade altura da lâmpada.
        this.largura = largura; // Atribui o valor da largura à propriedade largura da lâmpada.
        this.base = base; // Atribui o valor da base à propriedade base da lâmpada.
        this.bulbo = bulbo; // Atribui o valor do bulbo à propriedade bulbo da lâmpada.
        this.filamento = filamento; // Atribui o valor do filamento à propriedade filamento da lâmpada.
        this.contatoEletrico = contatoEletrico; // Atribui o valor do contato elétrico à propriedade contatoEletrico da lâmpada.
    }

    metodoLampada(textura, volume, peso, cor, altura, largura, base, bulbo, filamento, contatoEletrico) { // Método para atualizar as propriedades da lâmpada.
        this.textura = textura; // Atualiza a propriedade textura com um novo valor.
        this.volume = volume; // Atualiza a propriedade volume com um novo valor.
        this.peso = peso; // Atualiza a propriedade peso com um novo valor.
        this.cor = cor; // Atualiza a propriedade cor com um novo valor.
        this.altura = altura; // Atualiza a propriedade altura com um novo valor.
        this.largura = largura; // Atualiza a propriedade largura com um novo valor.
        this.base = base; // Atualiza a propriedade base com um novo valor.
        this.bulbo = bulbo; // Atualiza a propriedade bulbo com um novo valor.
        this.filamento = filamento; // Atualiza a propriedade filamento com um novo valor.
        this.contatoEletrico = contatoEletrico; // Atualiza a propriedade contatoEletrico com um novo valor.
        console.log(this); // Imprime a lâmpada com suas novas propriedades no console.
        return this.textura + " - " + // Retorna as propriedades da lâmpada.
        this.volume +
        " - " +
        this.peso +
        " - " +
        this.cor +
        " - " +
        this.altura +
        " - " +
        this.largura +
        " - " +
        this.base +
        " - " +
        this.bulbo +
        " - " +
        this.filamento +
        " - " +
        this.contatoEletrico; // Retorna todos os valores das propriedades da lâmpada.
    }
}

const lampada = new Lampada(); // Cria uma const chmada lampada que é somente leitura
console.log(lampada.metodoLampada("textura", "volume", "peso", "cor", "altura", "largura", "base", "bulbo", "filamento", "contatoEletrico")); // Chama o método para definir as propriedades da lâmpada e imprime o resultado.
