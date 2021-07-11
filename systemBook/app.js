// pegar input do usuário
// Se sim, mostrar as categorias disponíveis, pergunta qual categroria escolhe
// Se não, mostre todos os livros em ordem crescente pela quantidade de paginas

const livros = require('./database') // importando
//console.log(livros)
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if(entradaInicial.toLocaleUpperCase()=== 'S') { // toLocaleUpperCase reconhece a letra maiuscula e minúscula
    console.log('Essaas são as categorias disponíveis:')
    console.log("Desenvolvimento Humano", "/Autoajuda", "/Tecnologia")

    const entradaCategoria = readline.question("Qual categoria você escolhe: ")
    const retorno = livros.filter(livro.categoria === entradaCategoria)

    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses são todos os livros disponíveis")
    console.table(livrosOrdenados)
}
