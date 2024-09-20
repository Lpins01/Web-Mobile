// Seleciona o botão de alternar tema
const toggleThemeButton = document.querySelector('.toggle-theme');

// Adiciona um evento de clique no botão
toggleThemeButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
});
