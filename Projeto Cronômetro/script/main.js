let cronometro;
let contador = 60;

    document.getElementById('start').addEventListener('click', function() {
        clearInterval(cronometro); // Limpa o intervalo anterior, se houver
        cronometro = setInterval(function() {
            contador--;
            if (contador >= 0) {
                document.getElementById('cronometro').textContent = contador < 10 ? `00${contador}` : `${contador}` ;
                document.getElementById('cronometro1').textContent = `00`;
            } else {
                clearInterval(cronometro); // Zera o cronômetro após 60 segundos
            }
        }, 1000);
    });

    document.getElementById('reset').addEventListener('click', function() {
        clearInterval(cronometro); // Limpa o intervalo
        contador = 60; // Zera o contador
        document.getElementById('cronometro1').textContent = '01';
        document.getElementById('cronometro').textContent = '00'; // Atualiza o display
    });

var areaLight = document.getElementById('area-light')
var areaDark = document.getElementById('area-dark')
var btnWoman = document.getElementById('btn-woman')
var btnMen = document.getElementById('btn-men')
var textColor = document.getElementById('text-color')
var btnStart= document.getElementById('start')
var btnReset = document.getElementById('reset')
var titleColor = document.getElementById('title-color')


var textLight = document.getElementById('text-light')
var textDark = document.getElementById('text-dark')

textLight.addEventListener('click', function(){
    areaDark.style.backgroundImage = 'url(/img/light-blue.jpg)'
    areaDark.style.backgroundPosition = 'center'
    areaDark.style.backgroundSize = 'cover'
    areaDark.style.opacity = '0.8'
})

textDark.addEventListener('click', function(){
    areaDark.style.backgroundImage = 'url(/img/dark-blue.jpg'
    areaDark.style.backgroundPosition = 'center'
    areaDark.style.backgroundSize = 'cover'
    areaDark.style.opacity = '0.8'
})

btnMen.addEventListener('click' , function(){
    document.body.style.backgroundColor = '#ECE5C7'
    areaLight.style.backgroundColor = '#C2DEDC'
    areaDark.style.backgroundColor = '#116A7B'
    btnWoman.style.color = 'black'
    btnMen.style.color = 'black'
    textColor.style.color = 'black'
    btnStart.style.backgroundColor = '#ece5c7'
    btnReset.style.backgroundColor = '#ece5c7'
    areaDark.style.backgroundImage = 'none'
    areaLight.style.backgroundImage = 'none'

    textLight.addEventListener('click', function(){
        areaDark.style.backgroundImage = 'url(/img/light-blue.jpg)'
        areaDark.style.backgroundPosition = 'center'
        areaDark.style.backgroundSize = 'cover'
        areaDark.style.opacity = '0.8'
    })
    
    textDark.addEventListener('click', function(){
        areaDark.style.backgroundImage = 'url(/img/dark-blue.jpg'
        areaDark.style.backgroundPosition = 'center'
        areaDark.style.backgroundSize = 'cover'
        areaDark.style.opacity = '0.8'
    })
})

btnWoman.addEventListener('click' , function(){
    document.body.style.backgroundColor= '#FCC8D1'
    areaLight.style.backgroundColor = '#FFABAB'
    areaDark.style.backgroundColor = '#D14D72'
    areaDark.style.backgroundImage = 'none'
    btnStart.style.backgroundColor = '#FEF2F4'
    btnReset.style.backgroundColor = '#FEF2F4'

    textLight.addEventListener('click' , function(){
        areaDark.style.backgroundImage = 'url(/img/light-pink2.jpg)'
        areaDark.style.backgroundPosition = 'center'
        areaDark.style.backgroundSize = 'cover'
        areaDark.style.backgroundRepeat = 'no-repeat'
        areaDark.style.opacity = '0.8'
    })

    textDark.addEventListener('click' , function(){
        areaDark.style.backgroundImage = 'url(/img/dark-pink2.jpg'
        areaDark.style.backgroundPosition = 'center'
        areaDark.style.backgroundSize = 'cover'
        areaDark.style.opacity = '0.8'
    })
})