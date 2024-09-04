var nomes = ["Marina", "Isabela", "José", "Pedro", "Paulo"]

// Quando a página for carregada, chamar a função anônima
window.onload = function(){
    // mudar o conteúdo HTML
    let listaTAG = document.getElementById("lista")
    for(var i=0; i<nomes.length; i++){
        listaTAG.innerHTML += `<li>${ nomes[i] }</li>`
    }

    // mudar estilo CSS
    let testeTAG = document.getElementById("teste")
    testeTAG.style.border = "3px solid blue"
    testeTAG.style.backgroundColor = "yellow"
}





