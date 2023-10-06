const log =(str)=> console.log(str)


// Registro dos temas
const temas = {
  animais: ['cachorro', 'gato', 'elefante', 'leao', 'passaro', 'peixe', 'tigre', 'girafa', 'macaco', 'cobra'],
  comidas: ['pizza', 'hamburguer', 'sushi', 'massa', 'salada', 'sopa', 'churrasco', 'taco', 'kebab', 'sorvete'],
  capitaisbrasileiras: ['aracaju', 'salvador', 'rio branco', 'belem', 'belo horizonte', 'boa vista', 'brasilia', 'campo grande', 'cuiaba', 'curitiba', 'florianopolis', 'fortaleza', 'goiania', 'joao pessoa', 'macapa', 'maceio', 'manaus', 'natal', 'palmas', 'porto alegre', 'porto velho', 'recife', 'sao luis', 'teresina', 'vitoria'],
  jsfuncional: ['currying','map','filter','reduce','imutabilidade','recursividade', 'pureza','arrow','listas'],
  linguagensprogramacao: ['python', 'javascript', 'java',  'ruby', 'php', 'swift', 'rust', 'typescript', 'kotlin', 'perl', 'haskell', 'cobol', 'prolog', 'sql', 'assembly'],
  cores: ['vermelho', 'azul', 'amarelo', 'verde', 'laranja', 'roxo', 'rosa', 'marrom', 'preto', 'branco'],
  esportes: ['futebol', 'basquete', 'tenis', 'natacao', 'volei', 'atletismo', 'golfe', 'rugby', 'tenis de mesa', 'ciclismo', 'badminton'],
  profissoes: ['medico', 'engenheiro', 'professor', 'advogado', 'contador', 'enfermeiro', 'arquiteto', 'psicologo', 'programador', 'jornalista'],
  instrumentosmusicais: ['violino', 'guitarra', 'piano', 'flauta', 'bateria', 'trompete', 'violoncelo', 'saxofone', 'harpa', 'gaita', 'saxofone'],
  frutas: ['Banana', 'Pera', 'Uva', 'Tangerina', 'Tamarindo', 'Siriguela', 'Pitanga', 'Pessego', 'Morango', 'Melao', 'Melancia', 'Maracuja', 'Mangaba', 'Manga', 'Mamao', 'Maca', 'Limao', 'Laranja', 'Kiwi', 'Jambo', 'Jenipapo', 'Jaca', 'Jabuticaba', 'Groselha', 'Goiaba', 'Framboesa', 'Figo', 'Coco', 'Cereja', 'Carambola', 'Caja', 'Cacau', 'Amora', 'Acerola', 'Acai', 'Abacaxi', 'Abacate', 'Caju'],
  paises: ['Brasil', 'Argentina', 'China', 'Uruguai', 'Equador', 'Chile', 'Russia', 'Estados Unidos', 'Russia', 'Australia', 'Japao', 'India', 'Canada', 'Mexico', 'Alemanha', 'Franca', 'Italia', 'Mongolia', 'Suica', 'Paraguai', 'Nigeria', 'Argelia', 'Dinamarca', 'Finlandia', 'Cazaquistao', 'Indonesia', 'Sudao', 'Libia', 'Peru', 'Mali', 'Colombia', 'Etiopia', 'Bolivia', 'Egito', 'Venezuela', 'Iraque', 'Siria', 'Paquistao', 'Afeganistao', 'Somalia', 'Espanha', 'Suecia', 'Tailandia', 'Camaroes', 'Portugal', 'Inglaterra', 'Filipinas', 'Romenia', 'Nepal', 'Grecia', 'Cuba', 'Austria', 'Croacia']
};

console.log(temas);

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
  const pegarDivTema= document.getElementById("temaTitulo") //Função que faz referência ao id tema, onde será exibido o tema na página.
  pegarDivTema.textContent = pegarTemaURL() // Através do valor da função pegarTemaURL, utilizamos a propriedade 'innerHTML' para inserir este valor dentro do id 'tema'.
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

const numirudejug = parseInt(pegarNumeroJogadoresURL()) //Pegar a quantidade de jogadores
let contador = 5 //Quantidade de vidas
const elemento = document.querySelectorAll('.letra')
let vez = 1 // Jogador inicial
let palavraParcial = Array.from(palavraSelecionada).map(()=> '_ ')

// Função pra mostrar na tela o jogador da vez
function atualizarInfoJogador() {
  const infoJogador = document.getElementById('vez-jogador')
  infoJogador.textContent = `Jogador da vez: P${vez}`
}

atualizarInfoJogador()

 elemento.forEach((button)=>{
    button.addEventListener('click', function(){
      console.log(contador)
      const letraSelecionada= this.getAttribute('caractere');
      console.log(letraSelecionada)

       if (palavraSelecionada.includes(letraSelecionada)) {
// Atualiza parte da palavra na tela com a escolha correta da letra através do map 
        const lugarDaPalavraSecreta = document.getElementById("palavra-secreta");
        palavraParcial= palavraSelecionada.split('').map((letra, index) => (letra === letraSelecionada ? letraSelecionada : palavraParcial[index]));
        lugarDaPalavraSecreta.textContent= palavraParcial.join('');  
        return       
       } 

        if (contador==0) {
          const img= document.getElementById('forca-imagens')
      
          img.insertAdjacentHTML('afterBegin',`<img id='img0' class="img${0}" src="sprites/Vidas Forca/Forca ${0} vidas.png">`)
          
         
          
        setTimeout(() => {
          window.alert(`Perdeu, TROUXA. A palavra certa era ${palavraSelecionada}.`)
        }, 500);
          return 
        } 
        vez = (vez % numirudejug) + 1; // Passar a vez
       
        const img= document.getElementById('forca-imagens')
      
       img.insertAdjacentHTML('afterBegin',`<img class="img${parseInt(contador)}" src="sprites/Vidas Forca/Forca ${parseInt(contador)} vidas.png">`)
       contador = contador - 1;
       atualizarInfoJogador(); // Atualize a informação do jogador da vez na tela
         }
        //  Atualiza a imagem da forca
        
    )
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


