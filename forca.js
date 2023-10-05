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

const indef = x => typeof x == 'undefined' 
//Função para verificar se a palavra já foi completada, se retornar 'false' foi completada, se retornar 'true' ainda faltam letras para acertar
const acertaTudo = (tracejada, e = '_') => { 
    const [x, ...xs] = tracejada;
    if (indef(x)) {
        return false;
    } 
    else if (x === ' ') return acertaTudo(xs, e)
    // Se x for um espaço em branco, continuar verificando as outras letras
    else return (e === x) || acertaTudo(xs, e)
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
  const pegarDivTema= document.getElementById('tema') //Função que faz referência ao id tema, onde será exibido o tema na página.
  pegarDivTema.innerHTML = pegarTemaURL() // Através do valor da função pegarTemaURL, utilizamos a propriedade 'innerHTML' para inserir este valor dentro do id 'tema'.
}

// Função para selecionar uma palavra aleatória de um tema diretamente do URL.
const selecionarPalavraAleatoria = (tema = pegarTemaURL())=> {
  // Função em que o Math.random multiplicado pelo comprimento do tema escolhido, vai gerar um indíce aleatório.
  const palavraAleatoria = Math.floor(Math.random() * (tema.length));
  return tema[palavraAleatoria];
 }
  


// Função para substituir a palavra aleatória por tracejados, está programada agora para printar a palavra sem as vírgulas
const traceja = (palavra = selecionarPalavraAleatoriaPorTema()) => {
  const [x, ...xs] = palavra;
  if (indef(x)) return "";
  else if (x === ' ') return ` ${traceja(xs)}`;
  else return `_ ${traceja(xs)}`;
}
//console.log(traceja(palavraSelecionada))

// Função para mostrar os jogadores na tela
function mostrarNJogadores() {
      const jg= parseInt(pegarNumeroJogadoresURL(), 10) // Obtém o número de jogadores a partir da URL e converte para um número inteiro na base 10.

     const listJogadores= document.getElementById('listaJogadores') // Esta função utiliza de uma estrutura condicional para verificar o número de jogadores com base no valor de 'jg'.
     if (jg===1) {
      // Se a escolha for de 1 jogador, insere uma lista com o elemento "P1".
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li></ul>')
     } else if(jg===2) {
      // Se a escolha for de 2 jogadores, insere uma lista com o elemento "P1" e "P2".
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li><li class="p2">P2</li></ul>')

     } else if(jg===3){
       // Se a escolha for de 3 jogadores, insere uma lista com o elemento "P1", "P2" e "P3".
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li><li class="p2">P2</li><li class="p3">P3</li></ul>')

     }else{
       // Se a escolha for de 4 jogadorer, insere uma lista com o elemento "P1", "P2", "P3" e "P4".
       return listJogadores.insertAdjacentHTML('beforeBegin','<ul><li class="p1">P1</li><li class="p2">P2</li><li class="p3">P3</li><li class="p4">P4</li></ul>')
     }

     
}
function marcarJogador() {
    const pegarP1 = document.querySelector('.p1')
    pegarP1.style.backgroundImage = 'url("") ';
    pegarP1.style.color= 'pink';

}

// Função que recebe uma palavra como argumento e a exibe na tela.
const mostrarPalavraNaTela = (palavra) => {
  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.textContent = traceja(palavra)   //Aqui chamo a função 'traceja' para formatar a palavra, para que depois seja exibida na tela.
}
// Função que recebe algum tema e retorna a palavra aleatória
const selecionarPalavraAleatoriaPorTema = (temaEscolhido = temas) => {
  // A partir da função pegarTemaUrl, o tema escolhido será formatado, convertendo as letras para minúsculas e retirando os espaços.
  const temaFormatado = temaEscolhido[pegarTemaURL().toLowerCase().replace(" ", "")] 
  // Então chama a função selecionarPalavraAleatoria já com o tema formatado para assim obter uma palavra aleatória do tema escolhido.
  return selecionarPalavraAleatoria(temaFormatado);
}

// Função para armazenar a palavra aleatória
const palavraSelecionada = selecionarPalavraAleatoriaPorTema()
console.log(palavraSelecionada)

let contador= parseInt(6); 


const elemento = document.querySelectorAll('.letra');
let palavraParcial = Array.from(palavraSelecionada).map(()=> '_ ')

 elemento.forEach((button)=>{
    button.addEventListener('click', function(){
      const letraSelecionada= this.getAttribute('caractere');
      console.log(letraSelecionada)

       if (palavraSelecionada.includes(letraSelecionada)) {
// Atualiza parte da palavra na tela com a escolha correta da letra através do map 
        const lugarDaPalavraSecreta = document.getElementById("palavra-secreta");
        palavraParcial= palavraSelecionada.split('').map((letra, index) => (letra === letraSelecionada ? letraSelecionada : palavraParcial[index]));
        lugarDaPalavraSecreta.textContent= palavraParcial.join('');         
       } else{

        contador--;
        if (contador<0) {
          
          return  window.alert('Perdeu, TROUXA')
        } 
         }
        //  Atualiza a imagem da forca
        const img= document.getElementById('forca-imagens')
        console.log(contador)
       img.insertAdjacentHTML('afterBegin',`<img class="img${parseInt(contador)}" src="sprites/Vidas Forca/Forca ${parseInt(contador)} vidas.png">`)
       
    })
  })


  
   
  
  

  
  
    
  
  /*function funcaoDoMap(x) {
    if (x===letraSelecionada) {
      return letraSelecionada
    } else if(palavraParcial.includes(x)) {
      
    }else{

    }
  }*/ 






//Chamada de funções
mostrarNJogadores()
definirTema()
marcarJogador()
mostrarPalavraNaTela(palavraSelecionada)


