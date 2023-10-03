const log =(str)=> console.log(str)


// Registro dos temas
const temas = {
    animais: ['cachorro', 'gato', 'elefante', 'leão', 'pássaro', 'peixe', 'tigre', 'girafa', 'macaco', 'cobra'],
    comidas: ['pizza', 'hambúrguer', 'sushi', 'massa', 'salada', 'sopa', 'churrasco', 'taco', 'kebab', 'sorvete'],
    capitaisbrasileiras: ['aracaju', 'salvador', 'rio branco', 'belem', 'belo horizonte', 'boa vista', 'brasília', 'campo grande', 'cuiabá', 'curitiba', 'florianópolis', 'fortaleza', 'goiânia', 'joão pessoa', 'macapá', 'maceió', 'manaus', 'natal', 'palmas', 'porto alegre', 'porto velho', 'recife', 'são luís', 'teresina', 'vitoria'],
    jsfuncional: ['currying','map','filter','reduce','imutabilidade','recursividade', 'pureza','arrow','listas'],
    linguagensprogramacão: ['python', 'javascript', 'java',  'ruby', 'php', 'swift', 'rust', 'typescript', 'kotlin', 'perl', 'haskell', 'cobol', 'prolog', 'sql', 'assembly'],
    cores: ['vermelho', 'azul', 'amarelo', 'verde', 'laranja', 'roxo', 'rosa', 'marrom', 'preto', 'branco'],
    esportes: ['futebol', 'basquete', 'tênis', 'natação', 'vôlei', 'atletismo', 'golfe', 'rugby', 'tênis de mesa', 'ciclismo', 'badminton'],
    profissões: ['médico', 'engenheiro', 'professor', 'advogado', 'contador', 'enfermeiro', 'arquiteto', 'psicólogo', 'programador', 'jornalista'],
    instrumentosmusicais: ['violino', 'guitarra', 'piano', 'flauta', 'bateria', 'trompete', 'violoncelo', 'saxofone', 'harpa', 'gaita', 'saxofone'],
    frutas: ['Banana', 'Pera', 'Uva', 'Tangerina', 'Tamarindo', 'Siriguela', 'Pitanga', 'Pessego', 'Morango', 'Melao', 'Melancia', 'Maracuja', 'Mangaba', 'Manga', 'Mamao', 'Maca', 'Limao', 'Laranja', 'Kiwi', 'Jambo', 'Jenipapo', 'Jaca', 'Jabuticaba', 'Groselha', 'Goiaba', 'Framboesa', 'Figo', 'Coco', 'Cereja', 'Carambola', 'Caja', 'Cacau', 'Amora', 'Acerola', 'Acai', 'Abacaxi', 'Abacate', 'Caju'],
    países: ['Brasil', 'Argentina', 'China', 'Uruguai', 'Equador', 'Chile', 'Russia', 'Estados Unidos', 'Russia', 'Australia', 'Japao', 'India', 'Canada', 'Mexico', 'Alemanha', 'Franca', 'Italia', 'Mongolia', 'Suica', 'Paraguai', 'Nigeria', 'Argelia', 'Dinamarca', 'Finlandia', 'Cazaquistao', 'Indonesia', 'Sudao', 'Libia', 'Peru', 'Mali', 'Colombia', 'Etiopia', 'Bolivia', 'Egito', 'Venezuela', 'Iraque', 'Siria', 'Paquistao', 'Afeganistao', 'Somalia', 'Espanha', 'Suecia', 'Tailandia', 'Camaroes', 'Portugal', 'Inglaterra', 'Filipinas', 'Romenia', 'Nepal', 'Grecia', 'Cuba', 'Austria', 'Croacia']
};

const imprimirLinhas = () =>{
    // ToDo: imprime as linhas na tela, mas olhar a ques~toa do espaço depois
}

/*
const gameState = {  //faz o controle do estado do jogo
    rodada:0,
    jogadorVez:players[0],
    vidas: 6,
    adivinhouLetra:false          
}
function alternaVez(newGameState){ //função para alternar a vez entre os jogadores
    const {rodada, adivinhouLetra} = newGameState;  //definimos o que vai ser a att do estado do jogo que faremos a cada round
    const novaRodada = (rodada+1) % players.length   //vai variar a rodada de 0 a 3, a qual vai ser usada como index para identificar o jogador da vez
    const novoPlayer = players[novaRodada]
    if (newGameState.vidas==0) return console.log("Game Over") //implementar a parada do jogo
    else if (acertaTudo==false) return console.log("Vitória!") //implementar a parada do jogo
    else if(adivinhouLetra){
        return {
            ...newGameState //se acertar a letra o estado do jogo se mantém igual e o jogador repete a vez
    }
    }
    else return {  //se errar a letra a vez é passada para o próximo jogador e terão menos uma vida
        ...newGameState,
        rodada: novaRodada,
        jogadorVez: novoPlayer,
        vidas: newGameState.vidas--, //falta testar se essa sintaxe tá funcionando pra reduzir as vidas uma a uma
        adivinhouLetra: false
    }
}
function playerAcerta(newGameState){//função para verificar se o player acertou, se a letra estiver na palavra faz uma cópia do estado do jogo onde adivinhouLetra é true
    if (posicaoLetra!=[]) 
  return {
    ...newGameState,
    adivinhouLetra: true
  }
}
*/


//Função para procurar a  posição da letra na palavra
/*Usa-se o split para dividir a string em uma lista e o reduce procura a letra escolhida, concatenando em uma lista o index da letra .*/ 

/*FUNÇÕES DA TELA DO JOGO*/
const posicaoLetra = (palavra, letra) => {
    return palavra.split('').reduce((acc, elemento, index) => {

        if (elemento === letra) {
            return acc.concat(index);
        }

        return acc

    }, [])
    
}

const indef = x => typeof x == 'undefined'  //Função para verificar se a palavra já foi completada, se retornar 'false' foi completada, se retornar 'true' ainda faltam letras para acertar
const acertaTudo = (tracejada, e='_') => {
    const [x, ...xs] = tracejada
    if (indef(x)) {return false}
    else return (e===x) || acertaTudo([...xs], e)
}

//Recupera o Tema e o jogador  do URL do site
function pegarTemaURL() {
    const searchParams = new URLSearchParams(window.location.search) 
    const tema = searchParams.get('tema')
    return tema
}
function pegarNumeroJogadoresURL(){
  const searchParams = new URLSearchParams(window.location.search) 
  const nJogadores = searchParams.get('jogadores')             
  return nJogadores
}

//Função para mostrar o tema na tela
const definirTema = () =>{
  const pegarDivTema= document.getElementById('tema')
  pegarDivTema.innerHTML = pegarTemaURL()
}

// Função para selecionar uma palavra aleatória de um tema
const selecionarPalavraAleatoria = (tema = pegarTemaURL())=> {
  const palavraAleatoria = Math.floor(Math.random() * (tema.length));
  return tema[palavraAleatoria];
 }
  
  // Função que recebe algum tema e retorna a palavra aleatória
  const selecionarPalavraAleatoriaPorTema = (temaEscolhido = temas) => {
    const temaFormatado = temaEscolhido[pegarTemaURL().toLowerCase().replace(" ", "")]
    return selecionarPalavraAleatoria(temaFormatado);
  }

  const palavraSelecionada = selecionarPalavraAleatoriaPorTema()

// Função para substituir a palavra aleatória por tracejados.
const traceja = (palavra = selecionarPalavraAleatoriaPorTema()) => {
  const [x, ...xs] = palavra
  if (indef(x)) return []
  else if (x === ' ') return [' ', ...traceja(xs)]
  else return ['_', ...traceja(xs)]
}
console.log(palavraSelecionada)
console.log(traceja(palavraSelecionada))

// Função para mostrar os jogadores na
function mostrarNJogadores() {
      const jg= parseInt(pegarNumeroJogadoresURL(), 10)

     const listJogadores= document.getElementById('listaJogadores')
     if (jg===1) {
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li></ul>')
     } else if(jg===2) {
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li><li class="p2">P2</li></ul>')

     } else if(jg===3){
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li><li class="p2">P2</li><li class="p3">P3</li></ul>')

     }else{
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li><li class="p2">P2</li><li class="p3">P3</li><li class="p4">P4</li></ul>')
     }

     
}
mostrarNJogadores()
definirTema()


