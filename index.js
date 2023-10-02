const log =(str)=> console.log(str)

function pegarTemaURL() {
    const valorTema= document.getElementById('temas').value
    log(valorTema)
    return valorTema
}

function pegarNumeroJogadores() {
    const valorN = document.getElementById('numero-jogadores').value
    log(valorN) 
    return valorN     
}

const redirecionar = () =>{
    const tema = pegarTemaURL()
    const jogadores = pegarNumeroJogadores()
    window.location.href = `./game.html?tema=${tema}&jogadores=${jogadores}`
}