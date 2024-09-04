var aluno = {
    nome: "Pedro",
    ra: 1147106,
    email: "pedro.cacique@mackenzie.br"
}

var alunos = [
    {
        nome: "Pedro",
        ra: 1147106,
        email: "pedro.cacique@mackenzie.br"
    },
    {
        nome: "Marina",
        ra: 345435,
        email: "marina@mackenzie.br"
    }
]

window.onload = function(){

    var testeTAG = document.getElementById("teste")
    for(var i=0; i<alunos.length; i++){
        testeTAG.innerHTML += `<article>
                                        <h1> ${alunos[i].nome} </h1>
                                        <h2> ${alunos[i].ra} </h2>
                                        <p> ${alunos[i].email} </p>
                                </article>`
    }
    
}