window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle(('sticky'), window.scrollY > 100)
};

////Menu Ico/////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    navbar.classList.toggle('active')
};

let darkMode = document.querySelector('#darkModeIcon');
darkMode.onclick = () => {
    darkMode.classList.toggle('bxs-sun')
    document.body.classList.toggle('dark-mode')
}