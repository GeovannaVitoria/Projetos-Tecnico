// Variáveis 
let estacao = document.getElementById('verao') 
let historia = document.getElementById('historia-card') 
let span = document.getElementById('span-geral') 
let span1 = document.getElementById('span-geral2') 
let shadow = document.getElementById('box-shadow')

let ainverno = document.getElementById('inverno')
let aprimavera = document.getElementById('primavera')
let aoutono = document.getElementById('outono')

// Cards Pacotes Textos
let card1Titulo = document.getElementById('card1-titulo')
let card1Lugar = document.getElementById('card1-lugar')

let card2Titulo = document.getElementById('card2-titulo')
let card2Lugar = document.getElementById('card2-lugar')

let card3Titulo = document.getElementById('card3-titulo')
let card3Lugar = document.getElementById('card3-lugar')

let card4Titulo = document.getElementById('card4-titulo')
let card4Lugar = document.getElementById('card4-lugar')


// Título Banner
let sobreTopoColor = document.getElementById('sobre-topo-color')
let sobreTopoTitulo = document.getElementById('sobre-topo-titulo')

// Lista - Menu
let listaColor = document.getElementById('lista-color')
let lista2Color = document.getElementById('lista2-color')
let lista3Color = document.getElementById('lista3-color')
let lista4Color = document.getElementById('lista4-color')

// Background Cadastro
let fundoCadastro = document.getElementById('cadastro')

// Imagens
let banner = document.getElementById('banner-geral')
let sobre = document.getElementById('sobre')
let card1 = document.getElementById('card-1')
let card2 = document.getElementById('card-2')
let card3 = document.getElementById('card-3')
let card4 = document.getElementById('card-4')



// ****** VERÃO ******

document.getElementById('verao').addEventListener('click', function() { 
    estacao.style.boxShadow ="0px 5px 10px #F80C1A "
    aprimavera.style.boxShadow ="none"
    aoutono.style.boxShadow ="none"
    ainverno.style.boxShadow ="none"
})

document.getElementById('verao').addEventListener('click', function() { 
    historia.style.backgroundColor ="#F8860C"
    historia.style.color = '#F8F8FF'
    historia.style.letterSpacing = '1px'
})

document.getElementById('verao').addEventListener('click', function() { 
    span.style.color ="#FF7F50"
    span1.style.color ="#FF7F50"
})

document.getElementById('verao').addEventListener('click', function() { 
    shadow.style.boxShadow ="1px 3px 1px 1px #FF7F50 "
})

// Cor Menu - Verão 

document.getElementById('verao').addEventListener('click', function() { 
    sobreTopoColor.style.color = 'white'
    sobreTopoTitulo.style.color = 'white'
    listaColor.style.color = 'white'
    lista2Color.style.color = 'white'
    lista3Color.style.color = 'white'
    lista4Color.style.color = 'white'
})

// Textos Card - Verão

document.getElementById('verao').addEventListener('click' , function(){
    card1Lugar.innerText = 'Fernando de Noronha'

    card2Titulo.innerText = 'Espanha'
    card2Lugar.innerText = 'Ibiza'

    card3Titulo.innerText = 'Itália'
    card3Lugar.innerText = 'Sicília'

    card4Titulo.innerText = 'Grécia'
    card4Lugar.innerText = 'Santorini'
})

// Imagens - Verão

document.getElementById('verao').addEventListener('click', function() { 
    banner.style.backgroundImage= 'url(../img/banner-verao.jpeg)'
})

document.getElementById('verao').addEventListener('click' , function(){
    sobre.style.backgroundImage= 'url(../imaGEM/Verão/card-amarelo.jpg)'
})

document.getElementById('verao').addEventListener('click' , function(){
    card1.style.backgroundImage = 'url(../imaGEM/Verão/fernandoNoronha.jpg)'
    card2.style.backgroundImage = 'url(../imaGEM/Verão/ibiza.jpg)'
    card3.style.backgroundImage = 'url(../imaGEM/Verão/italia2.jpeg)'
    card4.style.backgroundImage = 'url(../imaGEM/Verão/grecia.jpg)'
})

document.getElementById('verao').addEventListener('click' , function(){
    fundoCadastro.style.backgroundImage = 'url(../imaGEM/Verão/img-cadastro.jpg)'
})



// ***** INVERNO ******

document.getElementById('inverno').addEventListener('click', function() { 
    ainverno.style.boxShadow ="0px 5px 10px #2043F0"
    estacao.style.boxShadow ="none"
    aprimavera.style.boxShadow ="none"
    aoutono.style.boxShadow ="none"
})

document.getElementById('inverno').addEventListener('click', function() { 
    historia.style.backgroundColor ="#87CEFA"
})

document.getElementById('inverno').addEventListener('click', function() { 
    span.style.color ="#87CEFA"
    span1.style.color ="#87CEFA"
})

document.getElementById('inverno').addEventListener('click', function() { 
    shadow.style.boxShadow ="1px 3px 1px 1px #2043F0 "
})

document.getElementById('inverno').addEventListener('click', function() { 
    sobreTopoColor.style.color = '#696969'
    sobreTopoTitulo.style.color = '#696969'
    listaColor.style.color = '#696969'
    lista2Color.style.color = '#696969'
    lista3Color.style.color = '#696969'
    lista4Color.style.color = '#696969'
})

// Textos Card -Inverno

document.getElementById('inverno').addEventListener('click' , function(){
    card1Titulo.innerText = 'Argentina'
    card1Lugar.innerText = 'Bariloche'

    card2Titulo.innerText = 'Canadá'
    card2Lugar.innerText = 'Toronto'

    card3Titulo.innerText = 'Noruega'
    card3Lugar.innerText = 'Tromso'

    card4Titulo.innerText = 'Suiça'
    card4Lugar.innerText = 'Zurique'
})

// Imagens - Inverno

document.getElementById('inverno').addEventListener('click', function() { 
    banner.style.backgroundImage= "url(../img/banner-inverno.jpeg)"
})

document.getElementById('inverno').addEventListener('click' , function(){
    sobre.style.backgroundImage= 'url(../imaGEM/Inverno/coffe3.jpg)'
})

document.getElementById('inverno').addEventListener('click' , function(){
    card1.style.backgroundImage = 'url(../imaGEM/Inverno/bariloche.jpg)'
    card2.style.backgroundImage = 'url(../imaGEM/Inverno/toronto.jpg)'
    card3.style.backgroundImage = 'url(../imaGEM/Inverno/tromso.jpg)'
    card4.style.backgroundImage = 'url(../imaGEM/Inverno/zurique.jpg)'
})

document.getElementById('inverno').addEventListener('click' , function(){
    fundoCadastro.style.backgroundImage = 'url(../imaGEM/Inverno/fundo-cadastro.jpg)'
})



// ****** PRIMAVERA ******

document.getElementById('primavera').addEventListener('click', function() { 
    aprimavera.style.boxShadow ="0px 5px 10px #E1558E"
    aoutono.style.boxShadow ="none"
    ainverno.style.boxShadow ="none"
    estacao.style.boxShadow ="none"
})

document.getElementById('primavera').addEventListener('click', function() { 
    historia.style.backgroundColor ="#EE82EE"
})

document.getElementById('primavera').addEventListener('click', function() { 
    span.style.color ="#EE82EE"
    span1.style.color ="#EE82EE"
})

document.getElementById('primavera').addEventListener('click', function() { 
    shadow.style.boxShadow ="1px 3px 1px 1px #EE82EE "
})

document.getElementById('primavera').addEventListener('click', function() { 
    sobreTopoColor.style.color = 'white'
    sobreTopoTitulo.style.color = 'white'
    listaColor.style.color = 'white'
    lista2Color.style.color = 'white'
    lista3Color.style.color = 'white'
    lista4Color.style.color = 'white'
})

// Textos Card - Primavera

document.getElementById('primavera').addEventListener('click' , function(){
    card1Titulo.innerText = 'Malta'
    card1Lugar.innerText = 'St. Julians'

    card2Titulo.innerText = 'Canadá'
    card2Lugar.innerText = 'Vancouver'

    card3Titulo.innerText = 'Inglaterra'
    card3Lugar.innerText = 'Londres'

    card4Titulo.innerText = 'Estados Unidos'
    card4Lugar.innerText = 'Washington'
})

// Imagens - Primavera

document.getElementById('primavera').addEventListener('click', function() { 
    banner.style.backgroundImage= "url(../imaGEM/Primavera/banner-primavera.jpg)"
})

document.getElementById('primavera').addEventListener('click' , function(){
    sobre.style.backgroundImage= 'url(../imaGEM/Primavera/card2.jpeg)'
})

document.getElementById('primavera').addEventListener('click' , function(){
    card1.style.backgroundImage = 'url(../imaGEM/Primavera/stJulians.jpg)'
    card2.style.backgroundImage = 'url(../imaGEM/Primavera/Vancouver.png)'
    card3.style.backgroundImage = 'url(../imaGEM/Primavera/Londres.jpg)'
    card4.style.backgroundImage = 'url(../imaGEM/Primavera/washington.jpg)'
})

document.getElementById('primavera').addEventListener('click' , function(){
    fundoCadastro.style.backgroundImage = 'url(../imaGEM/Primavera/fundo-cadastro.jpg)'
})



// ****** OUTONO ******

document.getElementById('outono').addEventListener('click', function() { 
    aoutono.style.boxShadow = "0px 5px 10px black"
    ainverno.style.boxShadow = "none"
    estacao.style.boxShadow = "none"
    aprimavera.style.boxShadow = "none"

})

document.getElementById('outono').addEventListener('click', function() { 
    historia.style.backgroundColor ="#A0522D"
    historia.style.color= 'white'
})

document.getElementById('outono').addEventListener('click', function() { 
    span.style.color ="#FF6347"
    span1.style.color ="#FF6347"
})

document.getElementById('outono').addEventListener('click', function() { 
    shadow.style.boxShadow ="1px 3px 1px 1px #ff6347"
})

document.getElementById('outono').addEventListener('click', function() { 
    sobreTopoColor.style.color = '#696969'
    sobreTopoTitulo.style.color = '#696969'
    listaColor.style.color = '#696969'
    lista2Color.style.color = '#696969'
    lista3Color.style.color = '#696969'
    lista4Color.style.color = '#696969'
})

// Textos Card - Outono 

document.getElementById('outono').addEventListener('click' , function(){
    card1Titulo.innerText = 'Itália'
    card1Lugar.innerText = 'Toscana'

    card2Titulo.innerText = 'Estados Unidos'
    card2Lugar.innerText = 'Nova Inglaterra'

    card3Titulo.innerText = 'Brasil'
    card3Lugar.innerText = 'Jalapão'

    card4Titulo.innerText = 'Brasil'
    card4Lugar.innerText = 'Campos do Jordão'
})

// Imagens - Outono

document.getElementById('outono').addEventListener('click', function() { 
    banner.style.backgroundImage= "url(../img/banner-outono.jpg)"
})

document.getElementById('outono').addEventListener('click' , function(){
    sobre.style.backgroundImage= 'url(../imaGEM/Outono/card3.jpg)'
})

document.getElementById('outono').addEventListener('click' , function(){
    card1.style.backgroundImage = 'url(../imaGEM/Outono/toscana.jpg)'
    card2.style.backgroundImage = 'url(../imaGEM/Outono/novaInglaterra.jpg)'
    card3.style.backgroundImage = 'url(../imaGEM/Outono/jalapão.jpg)'
    card4.style.backgroundImage = 'url(../imaGEM/Outono/CamposJordão.jpg)'
})

document.getElementById('outono').addEventListener('click' , function(){
    fundoCadastro.style.backgroundImage = 'url(../imaGEM/Outono/fundo-cadastro.jpeg)'
})