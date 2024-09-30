// Seleciona os elementos do DOM
const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const menu = document.getElementById('menu');

// Adiciona eventos de clique para abrir e fechar o menu
openMenuButton.addEventListener('click', () => {
    menu.classList.remove('hidden');
    closeMenuButton.classList.remove('hidden');
    openMenuButton.classList.add('hidden');
});

closeMenuButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    closeMenuButton.classList.add('hidden');
    openMenuButton.classList.remove('hidden');
});

// Para ocultar o menu ao passar o mouse fora dele
menu.addEventListener('mouseleave', () => {
    menu.classList.add('hidden');
    closeMenuButton.classList.add('hidden');
    openMenuButton.classList.remove('hidden');
});
