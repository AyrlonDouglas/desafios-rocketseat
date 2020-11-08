// App que mede imc e diz se está acima do peso
// condição é: se imc > 30, está acima do peso.

const nome = 'Carlos'
const peso = 124
const altura = 1.88

const imc = peso / ( altura * altura )


if ( imc > 30) {
    console.log(`${nome}, você está acima do peso.`)
} else {
    console.log(`${nome}, você não está acima do peso.` )
}