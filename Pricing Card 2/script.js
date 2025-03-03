const toggleBtn = document.getElementById('toggleDarkMode');
toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    if(document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
});

if(localStorage.getItem('theme') == 'dark') {
    document.documentElement.classList.add('dark');
} 
