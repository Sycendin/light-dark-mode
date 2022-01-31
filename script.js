const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textbox = document.querySelector('#text-box');

// Refer to dark and light as variables
const dark_theme = 'dark'
const light_theme = 'light'

// change the image color based on dark/light mode
const imageMode = (color) =>{
    image1.src = `./img/undraw_font_${color}.svg`;
    image2.src = `./img/undraw_programming_${color}.svg`;
    image3.src = `./img/undraw_starry_window_${color}.svg`;
}

// Switch the theme to darkmode if 'dark' passed in otherwise make it light theme
const darkOrLight = (isDark) =>{
    nav.style.backgroundColor = isDark === 'dark' ? 'rgb( 0 0 0 / 50%)'  : 'rgb( 255 255 255 / 50%)';
    textbox.style.backgroundColor = isDark === 'dark'? 'rgb( 255 255 255 / 50%)' : 'rgb( 0 0 0 / 50%)'
    toggleIcon.children[0].textContent = isDark === 'dark' ? 'Dark Mode' : 'Light Mode';
    isDark === 'dark'? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
        isDark === 'dark' ? imageMode(dark_theme) : imageMode(light_theme)
}

// change the check box based on the theme and store that selection in local storage
const switchTheme = (event) =>{
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', dark_theme)
        localStorage.setItem('theme', dark_theme);
        darkOrLight(dark_theme);
    }
    else{
        document.documentElement.setAttribute('data-theme', light_theme)
        localStorage.setItem('theme', light_theme);
        darkOrLight(light_theme);
    }
}

toggleSwitch.addEventListener('change', switchTheme)

// On page load set page to dark theme if selection is saved on local storage
const currentTheme = localStorage.getItem('theme')
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === dark_theme){
        toggleSwitch.checked = true;
        darkOrLight(dark_theme);
    }
}