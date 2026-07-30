let angulo1 = 45
let angulo2 = 45
let angulo3 = 90

console.log (' Consideramos um triangulo com angulos ' + angulo1 + ', ' + angulo2 +' e ' + angulo3 )
console.log (' Vamos analisar os angulos e definir o triangulo...')

if (angulo1 == angulo2   || angulo2 == angulo3 || angulo1 == angulo3 )
    {
 console.log ('É um triangulo Isóceles')
}

    else if (angulo1 == angulo2 == angulo3){
    console.log ('É um triangulo equilatero')
}

    else if (angulo1 !== angulo2 !== angulo3) {
    console.log ('É um triangulo Escaleno')
}

else {
    console.log ('Não forma triangulo')
}