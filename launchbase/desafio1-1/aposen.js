//Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para
//se aposentar e no fim imprima uma mensagem em tela.

//Condição : O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de
//no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma

const nome = "Silvana"
const sexo = 'f'
const idade = 50
const anosContribuicao = 35


if ( sexo == 'F' ) {
    if ( idade + anosContribuicao >= 85) {
        console.log( `${nome}, você pode se aposentar!` )
    } else {
        console.log( `${nome}, você ainda não pode se aposentar!` )
    }
} else {
    if ( idade + anosContribuicao >= 95) {
        console.log( `${nome}, você pode se aposentar!` )
    } else {
        console.log( `${nome}, você ainda não pode se aposentar!` )
    }
}