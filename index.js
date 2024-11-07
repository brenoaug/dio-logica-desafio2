//calculando o saldo de vitórias e definindo o nível do jogador

//calculando o saldo de vitórias
let saldoVitorias = calcularVitorias(40, 10);

function calcularVitorias(vitorias, derrotas) {
  vitorias -= derrotas;
  return vitorias;
}

//definindo o nível do jogador de acordo com o saldo de vitórias
let nivel = definirNivel(saldoVitorias);

function definirNivel(nivelJogador) {
  if (nivelJogador <= 10) {
    return("Ferro");
  } else if (nivelJogador <= 20) {
    return("Bronze");
  } else if (nivelJogador <= 50) {
    return("Prata");
  } else if (nivelJogador <= 80) {
    return("Ouro");
  } else if (nivelJogador <= 90) {
    return("Diamante");
  } else if (nivelJogador <= 100) {
    return("Lendário");
  } else {
    return("Imortal");
  }
}


//imprimindo o saldo de vitórias e o nível do jogador
console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`);
