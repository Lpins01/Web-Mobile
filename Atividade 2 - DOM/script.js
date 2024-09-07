window.onload = function(){
    // Alternar Tema
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });

    // Validação de Formulário
    const emailInput = document.getElementById('femail');
    const nameInput = document.getElementById('fname');
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById('submit-button');
    const form = document.getElementById('contact-form');
    const successMessage = document.createElement('p');

    form.addEventListener('submit', (event) => {
        errorMessage.textContent = ''; // Limpa mensagem de erro
        successMessage.textContent = '';

        if (nameInput.value === '') {
            errorMessage.textContent = 'O campo de nome é obrigatório.';
            event.preventDefault(); // Evita o envio do formulário
        } else if (!emailInput.value.includes('@') || emailInput.value === '') {
            errorMessage.textContent = 'Insira um e-mail válido.';
            event.preventDefault();
        } else {
            // Exibe mensagem de sucesso no clique do botão
            successMessage.textContent = `Obrigado por se inscrever, ${nameInput.value}!`;
            form.appendChild(successMessage);
            event.preventDefault(); // Impede envio para que a mensagem não suma após recarregar
        }
    });
    
    // Lista de Tarefas
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task');
    let headerAdded = false; // Flag para verificar se o cabeçalho foi adicionado

    addTaskButton.addEventListener('click', () => {
        // Verifica se o nome foi preenchido
        if (nameInput.value !== '' && !headerAdded) {
            const newHeader = document.createElement('h3');
            newHeader.textContent = `Lista de ${nameInput.value}:`;
            taskList.insertAdjacentElement('beforebegin', newHeader); // Adiciona o cabeçalho antes da lista
            headerAdded = true; // Marca que o cabeçalho foi adicionado
        }

        if (taskInput.value !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = taskInput.value;

            // Adiciona opção de remover a tarefa
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.style.marginLeft = '10px';
            removeButton.addEventListener('click', () => {
                taskList.removeChild(newTask);
            });

            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
            taskInput.value = ''; // Limpar o campo de entrada
        }
    });
}
