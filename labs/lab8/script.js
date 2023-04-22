function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

const toggleButton = document.getElementById('toggleButton');
toggleButton.onclick = toggleTheme;
