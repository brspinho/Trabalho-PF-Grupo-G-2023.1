const numeroJogadores = window.prompt('Quantas pessoas vão jogar? (Máximo de jogadores:4)')
/*switch (numeroJogadores) {
    case 1:
        
        break;

    default:
        break;
}*/

const animais = ['Animais','vaca', 'papagaio', 'gato', 'cachorro']
const comidas = ['Comidas','pizza', 'hamburguer', 'cuscuz', 'shushi']
const capitaisBrasileiras = ['Capitais Brasileiras','aracaju', 'sao paulo', 'rio de janeiro', 'salvador']
const linguagensDeProgramacao= ['Linguagens de programação','Javascript','Java','PHP','Kotlin','C','C#','C++']
const temas = [animais,comidas,capitaisBrasileiras, linguagensDeProgramacao]

function mostrarTema(lista) {
    const listaNova = lista.toString()
    const indiceAleatorio = Math.floor(Math.random() * lista.length);

    const temaAleatorio= lista[indiceAleatorio][0]

    const pegarDivTema= document.getElementById('tema')

    return pegarDivTema.textContent= temaAleatorio;    
}
mostrarTema(temas)
//Função para escolher tema

//Função que seleciona uma palavra aleatória no tema escolhido

const escolher = (lista) =>{

    const numero = Math.floor(Math.random() * 5)
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






