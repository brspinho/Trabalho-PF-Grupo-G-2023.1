//Temas do jogo.
const animais = ['Animais','cachorro', 'gato', 'elefante', 'leão', 'tigre', 'girafa', 'zebra', 'gorila', 'panda', 'cavalo', 'coelho', 'papagaio', 'penguim', 'jacaré', 'tubarão', 'pombo', 'hipopótamo', 'camelo', 'vaca', 'baleia', 'cobra', 'macaco', 'avestruz', 'foca', 'raposa', 'guepardo', 'rinoceronte', 'lobo']
const comidas = ['Comidas','pizza', 'hambúrguer', 'sushi', 'massa', 'cuscuz', 'sorvete', 'lasanha', 'taco', 'sanduíche', 'espaguete', 'salmão', 'churrasco', 'pudim', 'queijo', 'panqueca', 'risoto', 'feijoada', 'croissant', 'guacamole']
const capitaisBrasileiras = ['Capitais Brasileiras','aracaju', 'salvador', 'belem', 'brasília', 'cuiabá', 'curitiba', 'florianópolis', 'fortaleza', 'goiânia', 'macapá', 'maceió', 'manaus', 'natal', 'palmas', 'recife', 'teresina', 'vitoria' ]
const linguagensDeProgramacao= ['Linguagens de programação','python', 'javascript', 'java', 'c', 'c++', 'c#', 'ruby', 'php', 'swift', 'go', 'rust', 'typescript', 'kotlin', 'perl', 'haskell', 'cobol', 'prolog', 'sql', 'assembly']
const jsFuncional = ['Javascipt (Programação Funcional)', 'currying','map','filter','reduce', 'imutabilidade','recursividade', 'pureza', 'listas']
const cores = ['Cores', 'vermelho', 'azul', 'amarelo', 'verde', 'laranja', 'roxo', 'rosa', 'marrom', 'preto', 'branco']
const esportes = ['Esportes', 'futebol', 'basquete', 'tênis', 'natação', 'vôlei', 'atletismo', 'golfe', 'rugby','ciclismo', 'badminton']
const profissões = ['Profissões','médico', 'engenheiro', 'professor', 'advogado', 'contador', 'enfermeiro', 'arquiteto', 'psicólogo', 'programador', 'jornalista']
const instrumentosMusicais = ['Instrumentos Musicais','violino', 'guitarra', 'piano', 'flauta', 'bateria', 'trompete', 'violoncelo', 'saxofone', 'harpa', 'gaita', 'saxofone']
const frutas = ['Frutas', 'Banana', 'Pera', 'Uva', 'Tangerina', 'Tamarindo', 'Siriguela', 'Pitanga', 'Pessego', 'Morango', 'Melao', 'Melancia', 'Maracuja', 'Mangaba', 'Manga', 'Mamao', 'Maca', 'Limao', 'Laranja', 'Kiwi', 'Jambo', 'Jenipapo', 'Jaca', 'Jabuticaba', 'Groselha', 'Goiaba', 'Framboesa', 'Figo', 'Coco', 'Cereja', 'Carambola', 'Caja', 'Cacau', 'Amora', 'Acerola', 'Acai', 'Abacaxi', 'Abacate', 'Caju']
const paises = ['Países', 'Brasil', 'Argentina', 'China', 'Uruguai', 'Equador', 'Chile', 'Russia', 'Estados Unidos', 'Russia', 'Australia', 'Japao', 'India', 'Canada', 'Mexico', 'Alemanha', 'Franca', 'Italia', 'Mongolia', 'Suica', 'Paraguai', 'Nigeria', 'Argelia', 'Dinamarca', 'Finlandia', 'Cazaquistao', 'Indonesia', 'Sudao', 'Libia', 'Peru', 'Mali', 'Colombia', 'Etiopia', 'Bolivia', 'Egito', 'Venezuela', 'Iraque', 'Siria', 'Paquistao', 'Afeganistao', 'Somalia', 'Espanha', 'Suecia', 'Tailandia', 'Camaroes', 'Portugal', 'Inglaterra', 'Filipinas', 'Romenia', 'Nepal', 'Grecia', 'Cuba', 'Austria', 'Croacia']
const temas = [animais,comidas,capitaisBrasileiras, linguagensDeProgramacao, jsFuncional, cores, esportes, instrumentosMusicais, profissões]


/*FUNÇÕES DA TELA DE INÍCI0*/
//Função retorna o tema escolhido
function mostrarListaDeTemas() {
    const input= document.getElementById('temaInput')
    input.setAttribute('list','lista-temas')
    input.focus();
}

//Função retorna numero de jogadores
function mostrarListaN() {
    const input2= document.getElementById('numeroInput')
    input.setAttribute('list','numero-jogadores')
    input.focus();
}

//Mostra o tema que foi escolhido na tela index.html
function mostrarTema(lista) {
    const listaNova = lista.toString()
    const indiceAleatorio = Math.floor(Math.random() * lista.length);

    const temaAleatorio= lista[indiceAleatorio][0]

    const pegarDivTema= document.getElementById('tema')

    return pegarDivTema.textContent= temaAleatorio;    
}
mostrarTema(temas)


const players = [{nome: 'Player 1', win: 0, vida: 5}, {nome: 'Player 2', win: 0, vida: 5}, {nome: 'Player 3', win: 0, vida: 5}, {nome: 'Player 4', win: 0, vida: 5}] 
//Temos separado cada jogador, ao seu lado o número de vitórias e vidas function selecionaPlayer(lista){ //quantidade de players na partida     const pegajog = document.getElementById('numjog').value //pegar o número de jogadores escolhidos     const players = lista.slice(0, pegajog) //selecionar somente a quantidade de players necessária     return players }

//Função que seleciona uma palavra aleatória no tema escolhido

const escolher = (lista) =>{

    const numero = Math.floor(Math.random() * lista.length)
    return lista[numero]

}
console.log(escolher(animais))

//Função para procurar a  posição da letra na palavra
/*Usa-se o split para dividir a string em uma lista e o reduce procura a letra escolhida, concatenando em uma lista o index da letra .*/ 

const posicaoLetra = (palavra, letra) => {
    return palavra.split('').reduce((acc, elemento, index) => {

        if (elemento === letra) {
            return acc.concat(index);
        }

        return acc

    }, [])
    
}


//Função para fazer o tratamento da palavra escolhida, ignorando acentuação (coloquei somente para acentuações da língua portuguesa)
const escolharandom = escolher(animais) //aqui devemos colocar entre parênteses o tema escolhido
const strip = escolharandom.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(strip)

const chute = (letra, palavra, vidas)
    if (procurar==0) return chute(letra, palavra, vidas-1) //Errou o chute --> falta implementar uma forma de passar a vez para o próximo jogador, com uma nova entrada de letra, da forma recursiva que está atualmente, vai virar um loop indesejado
    else if (procurar==0 & vidas==0) return gameoverplayer //retornar o fim do jogo --> falta implementar deixar esse jogador "off" até o fim da partida
   // else return tiraletrapalavra & return chute(letra, palavra, vidas) //Acertou o chute --> implementar função para mostrar a letra na palavra e jogador pode jogar dnv






