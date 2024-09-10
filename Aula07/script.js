var students = [
    {
        ra: 10388961,
        nome: "Leonardo",
        nota: 10
    },
    {
        ra: 18420720,
        nome: "Guilherme",
        nota: 8
    },
    {
        ra: 81973198,
        nome: "Marcos",
        nota: 9
    },
    {
        ra: 19731896,
        nome: "Marcia",
        nota: 10
    },
    {
        ra: 89752907,
        nome: "Paulo",
        nota: 5
    }
]

// Esta função recebe os dados de um estudante (st)
// e retorna uma linha da tabela HTML
function generateRow(st) {
    return `<tr>
                <td>${st.ra}</td>
                <td>${st.nome}</td>
                <td>${st.nota}</td>
            </tr>`
}

window.onload = function() {
    // ----- MAP -----
    var table = document.getElementById("table_body")

    // for (let i = 0; i < students.length; i++){
    //     table.innerHTML += generateRow(students[i])
    // }

    // O método map irá gerar uma nova lista, cada elemento da 
    // lista students irá ser passado para a função generateRow
    var newStudents = students.map(generateRow)
    
    // console.log(newStudents)

    for (let i = 0; i < newStudents.length; i++){
        table.innerHTML += newStudents[i]
    }

    // ----- FILTER -----

    var studentsFiltered = students.filter(filterStudent)
    var studentsFilteredMap = studentsFiltered.map(generateRow)

    // console.log(studentsFiltered)

    function filterStudent(st) {
        return st.nota >= 6
    }

    var table2 = document.getElementById("table_body2")

    for (let i = 0; i < studentsFilteredMap.length; i++) {
        table2.innerHTML += studentsFilteredMap[i]
    }

    // ----- SORT -----

    // o método sort sobrescreve o array original

    var studentsCopy = students.slice() // gera uma cópia do original
    studentsCopy.sort(compareStudents)
    var studentsSortMap = studentsCopy.map(generateRow) // mapeamento de aluno para TR

    function compareStudents(a, b) {
        return a.nota - b.nota
    }

    var table3 = document.getElementById("table_body3") // busca a tabela 3

    for (let i = 0; i < studentsSortMap.length; i++) { // preenche a tabela 3
        table3.innerHTML += studentsSortMap[i]
    }
}