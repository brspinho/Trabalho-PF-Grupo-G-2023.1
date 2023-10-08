//Armazena o tema escolhido pelo usuário na tela inicial da página através do botão select do HTML.
function pegarTemaURL() {
  const valorTema = document.getElementById("temas").value;
  return valorTema;
}

//Armazena o número de jogadores escolhido pelo usuário na tela inicial da página através do botão select do HTML.
function pegarNumeroJogadores() {
  const valorN = document.getElementById("numero-jogadores").value;
  return valorN;
}

/* Insere o tema e o número de jogadores escolhido pelo usuário no URL da págino do jogo, 
transmitindo a informação da página index.html para game.html. A função roda quando o botão
start game é pressionado */
const redirecionar = () => {
  const tema = pegarTemaURL();
  const jogadores = pegarNumeroJogadores();
  window.location.href = `./game.html?tema=${tema}&jogadores=${jogadores}`;
};
