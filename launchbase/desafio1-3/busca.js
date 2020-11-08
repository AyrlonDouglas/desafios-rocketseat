// Baseado no desafio anterior, utilize a mesma lista de usuários construída.
// Crie uma função que recebe os dados de um objeto de usuário e retorna SE
// o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
]

function checarSeUsuarioUsaCSS (usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        let css = false;
            if (usuarios[i].tecnologias == 'CSS'){
                css = true
            }
        } return css
}


const trabalhaComCss = checarSeUsuarioUsaCSS (usuarios)

if (trabalhaComCss) {
    console.log("usuarios trablahas com css")
} else {
    console.log('nao traalha com css')
}

