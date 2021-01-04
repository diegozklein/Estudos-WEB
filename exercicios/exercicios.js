function ex1 (a, b){
console.log(a + b)    
console.log(a * b)
console.log(a / b)    
console.log(a - b)
}

ex1(5,5)

function ex2(a, b, c){
    if ( a == b && b == c){
        console.log("Triângulo Equilátero");      
    }else if(a != b && b != c && c != a){
        console.log("Triângulo Escaleno!"); 
    }else{
        console.log("Triângulo Isósceles");
    }
}

ex2(5, 5, 5);

function ex3(base ,expoente){
    console.log(Math.pow(base,expoente))
}

ex3(5,5)

function ex4 (dividendo, divisor){
    console.log(`Resultado: ${dividendo/divisor}`)
    console.log(`Resto: ${dividendo%divisor}`)
}

ex4(3,5)