const toggleDark = document.getElementById('theme-dark');
const toggleLight = document.getElementById('theme-light');


toggleDark.addEventListener('click', () => {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
})

toggleLight.addEventListener('click', () => {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
})