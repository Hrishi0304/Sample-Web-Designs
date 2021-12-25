burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
//For Toggle-view
burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
})
//nav button transition
const nav = document.getElementById("nav-bar");
const hamburger = document.getElementById("hamburger-menu");
hamburger.addEventListener('click',()=>{
    nav.classList.toggle('change');
});
