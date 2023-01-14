window.onscroll = () => {
    const header = document.querySelector('header')
    const navFix = header.offsetTop

    if(window.pageYOffset > navFix) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}


const humberger = document.querySelector('#humberger')
const barOn = document.querySelector('#bar-on')
const barOff = document.querySelector('#bar-off')
const navMenu = document.querySelector('#nav-menu')

humberger.addEventListener('click', () => {
    barOn.classList.toggle('hidden')
    barOff.classList.toggle('hidden')
    navMenu.classList.toggle('hidden')
})