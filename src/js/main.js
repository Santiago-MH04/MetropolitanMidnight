// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const iconOpen = document.querySelector('.icon-open');
const iconClose = document.querySelector('.icon-close')
const navMobile = document.querySelector('.nav-mobile');



iconClose.addEventListener('click', ()=>{
    navMobile.classList.toggle('hiden');
    iconOpen.classList.remove('btn-hidden');
})

iconOpen.addEventListener('click', ()=>{
    navMobile.classList.toggle('hiden');
    iconOpen.classList.add('btn-hidden');
})// Import our custom CSS
import '../scss/styles.scss'
