const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario<funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
   // console.log(funcionarios[1])


    const func = funcionarios
                .filter(chineses)
                .filter(mulheres)
                .reduce(menorSalario)

    console.log(func)
    // for(i in funcionarios){
    //     if(funcionarios[i].genero === 'F' && funcionarios[i].pais === 'China'){
    //         console.log(funcionarios[i])
    //     }
    // }
   // response.send(funcionarios.Search[nome])

})