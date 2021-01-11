//operador ... rest(juntar)/ spread(espalhar)
//usar rest com parametro de func

//usar spread com objeto

const funcionario= { nome: 'Maria', salario: 12345.67 }
const clone = { ativo: true, ...funcionario}

console.log(clone);

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
