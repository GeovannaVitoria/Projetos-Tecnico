alert('Seja bem-vindo ao melhor jogo de rpg do mundo!')
alert('Agora, insira os dados do primeiro personagem:')
let nomeP1 = window.prompt('Escreva seu nome')
let poderAtaque = parseInt(window.prompt('Quanto vale o seu poder de ataque?'))


alert('Agora, insira os dados do segundo personagem')
let nomeP2 = window.prompt('Escreva o seu nome', 'Viking')
let pontosVida = parseInt(window.prompt('Quantos pontos de vida você possui?'))
let poderDefesa = parseInt(window.prompt('Quanto vale o seu poder de defesa?'))
let escudo = window.prompt('Você possui escudo?' , 'S/N')
console.log(escudo)

// if (escudo.toLowerCase == 'S'){
//     escudo = true
// } else (escudo.toLowerCase == 'N'){
//     escudo = false
// }

let quantidadeDano 

if (poderAtaque > poderDefesa ){
    quantidadeDano = (poderAtaque - poderDefesa)
}
else if (poderAtaque > poderDefesa){
   quantidadeDano = (poderAtaque - poderDefesa) / 2
} 
else{
    quantidadeDano = 0
}
                            
let pontosVida2 = (pontosVida - quantidadeDano)

alert('Aqui está os resultados do primeiro personagem:')
alert('Nome: ' + nomeP1 + ' e seu poder de ataque é ' + poderAtaque) 
alert('Aqui está os resultados do segundo personagem:')
alert('Nome: ' + nomeP2 + '\nPontos de vida anterior: ' + pontosVida + '\n A quantidade de dano foi: ' + quantidadeDano + '\nPontos de vida atual: ' + pontosVida2)


// if (poderAtaque > poderDefesa){
//     //    quantidadeDano
//     // } else if (poderAtaque < poderDefesa){
//     //     quantidadeDano
//     // }


// let menor = window.prompt('Você é menor de idade?', 'S/N')


