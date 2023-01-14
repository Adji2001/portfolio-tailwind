window.onscroll = () => {
    const header = document.querySelector('header')
    const navFix = header.offsetTop
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > navFix) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
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

const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {
    if(darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
  } else {
    darkToggle.checked = false
  }