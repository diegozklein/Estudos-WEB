// nao aceita repeticao/nao indexada

const times = new Set()
times.add('Vasco')
times.add('SP').add('Palmeiras').add('Coritiba')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))