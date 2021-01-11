//tagged templates - processar o template dentro de uma funcao
function tag(parte, ...valores){
    console.log(parte)
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)