// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:
// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const dadosProgramador = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'desktop',
        },
        {
            nome: 'Python',
            especialidade: 'Data Science',
        },
        {
            nome: 'Javascript',
            especialidade: 'Web/Mobile',
        }
    ]
}

console.log( `O Usuário ${dadosProgramador.nome} tem ${dadosProgramador.idade} anos e usa a tecnologia ${dadosProgramador.tecnologias[0].nome} com especialidade ${dadosProgramador.tecnologias[0].especialidade}.`)
