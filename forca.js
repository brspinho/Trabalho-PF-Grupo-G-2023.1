const log =(str)=> console.log(str)

const animais = ['Animais','cachorro', 'gato', 'elefante', 'leão', 'tigre', 'girafa', 'zebra', 'gorila', 'panda', 'cavalo', 
'coelho', 'papagaio', 'penguim', 'jacaré', 'tubarão', 'pombo', 'urso polar', 'hipopótamo', 'camelo', 'vaca', 'baleia', 'cobra', 'macaco', 'avestruz', 'foca', 'raposa', 'guepardo', 'rinoceronte', 'lobo']
const comidas = ['Comidas','pizza', 'hambúrguer', 'sushi', 'massa', 'cuscuz', 'sorvete', 'lasanha', 'taco', 'sanduíche', 'batata frita', 'espaguete', 'salmão', 'frango grelhado', 'peixe e fritas', 'sopa de tomate', 'churrasco', 'torta de maçã', 'pudim', 'queijo', 'arroz frito', 'macarrão instantâneo', 'panqueca', 'salmão defumado', 'risoto', 'feijoada', 'croissant', 'guacamole']
const capitaisBrasileiras = ['Capitais Brasileiras','aracaju', 'salvador', 'rio branco', 'belem', 'belo horizonte', 'boa vista', 'brasília', 'campo grande', 'cuiabá', 'curitiba', 'florianópolis', 'fortaleza', 'goiânia', 'joão pessoa', 'macapá', 'maceió', 'manaus', 'natal', 'palmas', 'porto alegre', 'porto velho', 'recife', 'são luís', 'teresina', 'vitoria' ]
const linguagensDeProgramacao= ['Linguagens de programação','python', 'javascript', 'java', 'c', 'c++', 'c#', 'ruby', 'php', 'swift', 'go', 'rust', 'typescript', 'kotlin', 'perl', 'haskell', 'cobol', 'prolog', 'sql', 'assembly']
const jsFuncional = ['Javascipt (Programação Funcional)', 'currying','map','filter','reduce','imutabilidade','recursividade', 'pureza','arrow','listas']
const cores = ['Cores','vermelho', 'azul', 'amarelo', 'verde', 'laranja', 'roxo', 'rosa', 'marrom', 'preto', 'branco']
const esportes = ['Esportes','futebol', 'basquete', 'tênis', 'natação', 'vôlei', 'atletismo', 'golfe', 'rugby', 'tênis de mesa', 'ciclismo', 'badminton']
const profissões = ['Profissões','médico', 'engenheiro', 'professor', 'advogado', 'contador', 'enfermeiro', 'arquiteto', 'psicólogo', 'programador', 'jornalista']
const instrumentosMusicais = ['Instrumentos Musicais','violino', 'guitarra', 'piano', 'flauta', 'bateria', 'trompete', 'violoncelo', 'saxofone', 'harpa', 'gaita', 'saxofone']
const frutas = ['Frutas', 'Banana', 'Pera', 'Uva', 'Tangerina', 'Tamarindo', 'Siriguela', 'Pitanga', 'Pessego', 'Morango', 'Melao', 'Melancia', 'Maracuja', 'Mangaba', 'Manga', 'Mamao', 'Maca', 'Limao', 'Laranja', 'Kiwi', 'Jambo', 'Jenipapo', 'Jaca', 'Jabuticaba', 'Groselha', 'Goiaba', 'Framboesa', 'Figo', 'Coco', 'Cereja', 'Carambola', 'Caja', 'Cacau', 'Amora', 'Acerola', 'Acai', 'Abacaxi', 'Abacate', 'Caju']
const paises = ['Países', 'Brasil', 'Argentina', 'China', 'Uruguai', 'Equador', 'Chile', 'Russia', 'Estados Unidos', 'Russia', 'Australia', 'Japao', 'India', 'Canada', 'Mexico', 'Alemanha', 'Franca', 'Italia', 'Mongolia', 'Suica', 'Paraguai', 'Nigeria', 'Argelia', 'Dinamarca', 'Finlandia', 'Cazaquistao', 'Indonesia', 'Sudao', 'Libia', 'Peru', 'Mali', 'Colombia', 'Etiopia', 'Bolivia', 'Egito', 'Venezuela', 'Iraque', 'Siria', 'Paquistao', 'Afeganistao', 'Somalia', 'Espanha', 'Suecia', 'Tailandia', 'Camaroes', 'Portugal', 'Inglaterra', 'Filipinas', 'Romenia', 'Nepal', 'Grecia', 'Cuba', 'Austria', 'Croacia']
const temas = [animais,comidas,capitaisBrasileiras, linguagensDeProgramacao, jsFuncional, cores, esportes, instrumentosMusicais, profissões, frutas, paises]

/*FUNÇÕES DA TELA DE INÍCI0*/
const mostrarListaDeTemas =()=> {
    const input= document.getElementById('temaInput')
    input.list= 'lista-temas'
    input.focus();
    
}
function mostrarListaN() {
    const input2= document.getElementById('numeroInput')
    input2.list = 'numero-jogadores'
    input2.focus();    
}

function armazenarTema() {
    const valorTema= document.getElementById('temaInput').value
    log(valorTema)
    return valorTema
}

function armazenarJogadores() {
    const valorN = document.getElementById('numeroInput').value
    log(valorN) 
    return valorN     
}

function jogar() {
    const valorN = document.getElementById('numeroInput').value
    const valorTema= document.getElementById('temaInput').value
    log(valorTema)
    log(valorN)
    return valorTema
    return valorN
}



/*
function mostrarTema(lista) {
    const listaNova = lista.toString()
    const indiceAleatorio = Math.floor(Math.random() * lista.length);

    const temaAleatorio= lista[indiceAleatorio][0]

    const pegarDivTema= document.getElementById('tema')

    return pegarDivTema.textContent= temaAleatorio;    
}*/
//mostrarTema(temas)
//Função para escolher tema

const escolherTema = () => {
    const escolherTema = document.getElementById('escolherTema')
    const temaEscolhido = escolherTema.value
    if (temaEscolhido !== '' ) {
        document.getElementById('tema').textContent = `Tema Selecionado:' ${temaEscolhido}`
    }else document.getElementById('tema').textContent = `Tema Não Selecionado`

}

//Função que seleciona uma palavra aleatória no tema escolhido

// const escolher = (tema) =>{
//     const palavraNoTema = temas[tema]
//     // Escolhe uma palavra aleatoria do tema
//     const palavraAleatoria = palavraNoTema[Math.floor(Math.random() * tema?.length)]
//     return palavraAleatoria
// }


//     // Spitando a palavra
//     // const palavraSplitada = palavraAleatoria.split('')
//     // return palavraSplitada

//     const palavraAleatoriaUsada = escolher('comidas')
//     // Função para mostrar a palavra na tela(Ainda falta coisa pra ajeitar, deixa que eu depois arrumo)
//     mostrarPalavra()
//     function mostrarPalavra (){
//         const palavratela = document.getElementById("palavra-secreta")
//         palavratela.innerHTML = palavraAleatoriaUsada
//     }

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

//console.log(posicaoLetra('teste','e'))

/*
//Função para fazer o tratamento da palavra escolhida, ignorando acentuação (coloquei somente para acentuações da língua portuguesa)
const escolharandom = escolher(animais) //aqui devemos colocar entre parênteses o tema escolhido
const strip = escolharandom.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(strip)
//Função para separar a string por caracter
const separa = strip.split("")

const chute = (letra, palavra, vidas)
    if (procurar==0) return chute(letra, palavra, vidas-1) //Errou o chute --> falta implementar uma forma de passar a vez para o próximo jogador, com uma nova entrada de letra, da forma recursiva que está atualmente, vai virar um loop indesejado
    else if (procurar==0 & vidas==0) return gameoverplayer //retornar o fim do jogo --> falta implementar deixar esse jogador "off" até o fim da partida
   // else return tiraletrapalavra & return chute(letra, palavra, vidas) //Acertou o chute --> implementar função para mostrar a letra na palavra e jogador pode jogar dnv
*/



const botaoJogar = document.getElementById("botaoJogar");
botaoJogar.addEventListener('click', (x)=>{
redirecionar()

})

const redirecionar = () =>{
    const tema = armazenarTema()
    const jogadores = armazenarJogadores()
    window.location.href = `./game.html?tema=${tema}&jogadores=${jogadores}`
}

const recuperarDados = () => {
    const searchParams = new URLSearchParams(window.location.search)
const tema = searchParams.get('tema')
const jogadores = searchParams.get('jogadores')
console.log(tema)
console.log(jogadores)
}
