let bolinhaVerde = document.getElementById('bolinhaVerde')

let bolinhaAmarela = document.getElementById('bolinha-amarela')

let bolinhaVermelha = document.getElementById('bolinha-vermelha')

let spanV = document.querySelector('#countV')

let spanA = document.querySelector('#countA')

let spanVERM = document.querySelector('#countVERM')

let countV = parseInt(spanV.innerText)

let countA = parseInt(spanA.innerText)

let countVERM = parseInt(spanVERM.innerText)


document.getElementById('btnVerde').addEventListener('click' , function(){
    bolinhaVerde.style.boxShadow = '2px 2px 10px #39c939'
    bolinhaAmarela.style.boxShadow = '7px 7px 10px #1a1a1a'
    bolinhaVermelha.style.boxShadow = '7px 7px 10px #1a1a1a'
    countV += 1
    spanV.innerHTML = countV
    spanV.style.color = '#39c939'
    spanV.style.backgroundColor = 'gray'
    spanV.style.borderRadius = '100px'
    spanV.style.padding = '2px 10px'
})

document.getElementById('btn-amarelo').addEventListener('click' , function(){
    bolinhaAmarela.style.boxShadow = '2px 2px 10px #d3d336'
    bolinhaVerde.style.boxShadow = '7px 7px 10px #1a1a1a'
    bolinhaVermelha.style.boxShadow = '7px 7px 10px #1a1a1a'
    countA += 1
    spanA.innerHTML = countA
    spanA.style.color = '#d3d336'
    spanA.style.backgroundColor = 'gray'
    spanA.style.borderRadius = '100px'
    spanA.style.padding = '2px 10px'
})

document.getElementById('btn-vermelho').addEventListener('click', function(){
    bolinhaVermelha.style.boxShadow = '2px 2px 10px #d43a3a'
    bolinhaAmarela.style.boxShadow = '7px 7px 10px #1a1a1a'
    bolinhaVerde.style.boxShadow = '7px 7px 10px #1a1a1a'
    countVERM += 1
    spanVERM.innerHTML = countVERM
    spanVERM.style.color = 'red'
    spanVERM.style.backgroundColor = 'gray'
    spanVERM.style.borderRadius = '100px'
    spanVERM.style.padding = '2px 10px'
})

document.getElementById('lightMode').addEventListener('click' , function(){
    document.body.style.color = ''
    document.body.style.backgroundColor = 'antiquewhite'
    document.getElementById('placar').style.backgroundColor = 'rgba(216, 130, 18, 0.25)'
    document.getElementById('placar').style.boxShadow = '10px 10px 10px gray'
    document.getElementById('btnVerde').style.backgroundColor = 'rgba(216, 130, 18, 0.25)'
    document.getElementById('btn-amarelo').style.backgroundColor = 'rgba(216, 130, 18, 0.25)'
    document.getElementById('btn-vermelho').style.backgroundColor = 'rgba(216, 130, 18, 0.25)'
    document.getElementById('btnVerde').style.color =  '#363636'
    document.getElementById('btn-amarelo').style.color =  '#363636'
    document.getElementById('btn-vermelho').style.color =  '#363636'
    document.getElementById('titulo').style.textShadow = '2px 1px 5px whitesmoke'

})

document.getElementById('darkMode').addEventListener('click' , function(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
    document.getElementById('placar').style.backgroundColor = '#3a3a3a'
    document.getElementById('placar').style.boxShadow = '10px 10px 10px gray'
    document.getElementById('btnVerde').style.backgroundColor = '#3a3a3a'
    document.getElementById('btn-amarelo').style.backgroundColor = '#3a3a3a'
    document.getElementById('btn-vermelho').style.backgroundColor = '#3a3a3a'
    document.getElementById('btnVerde').style.color =  '#f1f5f9'
    document.getElementById('btn-amarelo').style.color =  '#f1f5f9'
    document.getElementById('btn-vermelho').style.color =  '#f1f5f9'
    document.getElementById('titulo').style.textShadow = '3px 3px 2px gray'
})