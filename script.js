function applyTheme(theme) {
    document.body.classList.remove('dark','auto','light');
    document.body.classList.add(theme);
}

let theme = localStorage.getItem('theme') || 'auto';
applyTheme(theme);
document.querySelector('#themeMode').value = theme;

document.querySelector('#themeMode').addEventListener('change', function(){
    let currenttheme = this.value;
    /* alert(currenttheme); */
    applyTheme(currenttheme);
    localStorage.setItem('theme', currenttheme);
})