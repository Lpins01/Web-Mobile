// Comentário de linha

/*
    Comentário de bloco
*/

var nome = "Pedro"
let sobrenome = "Cacique"
const pi = 3.14

var nome_da_variavel // snake case
var nomeDaVariavel // cammel case

var a = 10
var b = 5
var c = a + b
console.log( `O valor é ${c} `  )
// concatenar frase com variável usando crase e ${}

var i = 0
i++
i += 1
i = i + 1
console.log(i)

// Estrutura de decisão que permite intervalos
if ( i == 3 ) {
    console.log("TRÊS")
} else if ( i == 4) {   
    console.log("QUATRO")
} else {
    console.log("QUALQUER OUTRA COISA")
}

// Estrutura de decisão em que seu sei os casos pontuais
switch(i){
    case 1: 
        console.log("UM")
        break
    case 2:
        console.log("DOIS")
        break
    default:
        console.log("OUTRO")
}

// Estrutura de repetição contável
for(var j=0; j<10; j++){
    console.log(j)
}

// Estrutura de repetição não contável
var k = 0
while( k < 5) {
    console.log(k)
    k += 1
}

k = 0
do {
    console.log(k)
    k++
} while(k < 5)

// Função com palavra reservada
function soma(a, b){
    return a + b
}

// Função seta
var soma2 = (a, b) => a+b

var d = soma(2, 3)
console.log(d)

console.log( soma2(20, 98) )

var lista = ['Pedro', 'Paulo', 'Isabela']
for(var i=0; i<lista.length; i++){
    console.log( lista[i] )
}

// alert("Hola, mundo!")