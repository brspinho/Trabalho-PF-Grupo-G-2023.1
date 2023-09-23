const numeroJogadores = window.prompt('Quantas pessoas vão jogar? (Máximo de jogadores:4)')
/*switch (numeroJogadores) {
    case 1:
        
        break;

    default:
        break;
}*/

const animais = ['Animais','cachorro', 'gato', 'elefante', 'leão', 'tigre', 'girafa', 'zebra', 'gorila', 'panda', 'cavalo', 
'coelho', 'papagaio', 'penguim', 'jacaré', 'tubarão', 'pombo', 'urso polar', 'hipopótamo', 'camelo', 'vaca', 'baleia', 'cobra', 'macaco', 'avestruz', 'foca', 'raposa', 'guepardo', 'rinoceronte', 'lobo']
const comidas = ['Comidas','pizza', 'hambúrguer', 'sushi', 'massa', 'cuscuz', 'sorvete', 'lasanha', 'taco', 'sanduíche', 'batata frita', 'espaguete', 'salmão', 'frango grelhado', 'peixe e fritas', 'sopa de tomate', 'churrasco', 'torta de maçã', 'pudim', 'queijo', 'arroz frito', 'macarrão instantâneo', 'panqueca', 'salmão defumado', 'risoto', 'feijoada', 'croissant', 'guacamole']
const capitaisBrasileiras = ['Capitais Brasileiras','aracaju', 'sao paulo', 'rio de janeiro', 'salvador', 'rio branco', 'belem', 'belo horizonte', 'boa vista', 'brasília', 'campo grande', 'cuiabá', 'curitiba', 'florianópolis', 'fortaleza', 'goiânia', 'joão pessoa', 'macapá', 'maceió', 'manaus', 'natal', 'palmas', 'porto alegre', 'porto velho', 'recife', 'são luís', 'teresina', 'vitoria' ]
const linguagensDeProgramacao= ['Linguagens de programação','python', 'javascript', 'java', 'c', 'c++', 'c#', 'ruby', 'php', 'swift', 'go', 'rust', 'typescript', 'kotlin', 'perl', 'haskell', 'cobol', 'prolog', 'sql', 'assembly']
const jsFuncional = ['Javascipt (Programação Funcional)','funções de primeira classe', 'funções de alta ordem', 'currying','map','filter','reduce','imutabilidade','recursividade','recursão de cauda', 'pureza','função arrow','função anônima','listas']
const cores = ['Cores','vermelho', 'azul', 'amarelo', 'verde', 'laranja', 'roxo', 'rosa', 'marrom', 'preto', 'branco']
const esportes = ['Esportes','futebol', 'basquete', 'tênis', 'natação', 'vôlei', 'atletismo', 'golfe', 'rugby', 'tênis de mesa', 'ciclismo', 'vôlei sentado', 'badminton']
const profissões = ['Profissões','médico', 'engenheiro', 'professor', 'advogado', 'contador', 'enfermeiro', 'arquiteto', 'psicólogo', 'programador', 'jornalista']
const instrumentosMusicais = ['Instrumentos Musicais','violino', 'guitarra', 'piano', 'flauta', 'bateria', 'trompete', 'violoncelo', 'saxofone', 'harpa', 'gaita', 'saxofone']
const frutas = ['Frutas', 'Banana', 'Pera', 'Uva', 'Tangerina', 'Tamarindo', 'Siriguela', 'Pitanga', 'Pessego', 'Morango', 'Melao', 'Melancia', 'Maracuja', 'Mangaba', 'Manga', 'Mamao', 'Maca', 'Limao', 'Laranja', 'Kiwi', 'Jambo', 'Jenipapo', 'Jaca', 'Jabuticaba', 'Groselha', 'Goiaba', 'Framboesa', 'Figo', 'Coco', 'Cereja', 'Carambola', 'Caja', 'Cacau', 'Amora', 'Acerola', 'Acai', 'Abacaxi', 'Abacate', 'Caju']
const paises = ['Países', 'Brasil', 'Argentina', 'China', 'Uruguai', 'Equador', 'Chile', 'Russia', 'Estados Unidos', 'Russia', 'Australia', 'Japao', 'India', 'Canada', 'Mexico', 'Alemanha', 'Franca', 'Italia', 'Mongolia', 'Suica', 'Paraguai', 'Nigeria', 'Argelia', 'Dinamarca', 'Finlandia', 'Cazaquistao', 'Indonesia', 'Sudao', 'Libia', 'Peru', 'Mali', 'Colombia', 'Etiopia', 'Bolivia', 'Egito', 'Venezuela', 'Iraque', 'Siria', 'Paquistao', 'Afeganistao', 'Somalia', 'Espanha', 'Suecia', 'Tailandia', 'Camaroes', 'Portugal', 'Inglaterra', 'Filipinas', 'Romenia', 'Nepal', 'Grecia', 'Cuba', 'Austria', 'Croacia']
const temas = [animais,comidas,capitaisBrasileiras, linguagensDeProgramacao, jsFuncional, cores, esportes, instrumentosMusicais, profissões]


function mostrarTema(lista) {
    const listaNova = lista.toString()
    const indiceAleatorio = Math.floor(Math.random() * lista.length);

    const temaAleatorio= lista[indiceAleatorio][0]

    const pegarDivTema= document.getElementById('tema')

    return pegarDivTema.textContent= temaAleatorio;    
}
mostrarTema(temas)
//Função para escolher tema

const escolherTema = () => {
    const escolherTema = document.getElementById('escolherTema')
    const temaEscolhido = escolherTema.value
    if (temaEscolhido !== '' ) {
        document.getElementById('tema').textContent = `Tema Selecionado:' ${temaEscolhido}`
    }else document.getElementById('tema').textContent = `Tema Não Selecionado`

}

//Função que seleciona uma palavra aleatória no tema escolhido

const escolher = (lista) =>{

    const numero = Math.floor(Math.random() * lista.length)
    return lista[numero]

}
console.log(escolher(animais))

//Função para procurar a letra da palavra
/*Por enquanto a função retorna apenas o numero de vezes que uma letra aparece dentro de uma lista, 
fazer depois ele identificando o index da letra na palavra original, deixar pra guilherme fazer depois.*/

const procurar = (palavraOriginal, letra, palavra) =>{

    const [x, ...xs] = palavra

    if(x == undefined){
        return 0
    }
    else if(x == letra){
        return 1 + procurar(letra, xs)
    }
    else{
        return 0 + procurar(letra, xs)
    }

}
console.log(procurar('e', 'teste'))


//Função para fazer o tratamento da palavra escolhida, ignorando acentuação (coloquei somente para acentuações da língua portuguesa)
const escolharandom = escolher(animais) //aqui devemos colocar entre parênteses o tema escolhido
const strip = escolharandom.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(strip)
//Função para separar a string por caracter
const separa = strip.split("")

const chute = (letra, palavra, vidas)
    if (procurar==0) return chute(letra, palavra, vidas-1) //Errou o chute --> falta implementar uma forma de passar a vez para o próximo jogador, com uma nova entrada de letra, da forma recursiva que está atualmente, vai virar um loop indesejado
    else if (procurar==0 & vidas==0) return gameoverplayer //retornar o fim do jogo --> falta implementar deixar esse jogador "off" até o fim da partida
    else return tiraletrapalavra & return chute(letra, palavra, vidas) //Acertou o chute --> implementar função para mostrar a letra na palavra e jogador pode jogar dnv



