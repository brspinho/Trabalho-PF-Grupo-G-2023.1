const animais = ['vaca', 'papagaio', 'gato', 'cachorro']
const comidas = ['pizza', 'hamburguer', 'cuscuz', 'shushi']
const capitaisBrasileiras = ['aracaju', 'sao paulo', 'rio de janeiro', 'salvador']

const temas = [animais, comidas, capitaisBrasileiras]

//Função para escolher tema

//Função que seleciona uma palavra aleatória no tema escolhido

const escolher = (lista) =>{

    const numero = Math.floor(Math.random() * 5)
    return lista[numero]

}

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



