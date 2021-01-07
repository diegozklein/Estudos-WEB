const fs = require('fs')

const produtos = {
    nome: 'Celular',
    preco: 1234,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produtos), err => {
    console.log(err || 'Arquivo Salvo!')
})