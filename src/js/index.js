import '../sass/styles.scss'
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './menu/cursor';



const APP = window.APP || {}


const initApp = () => {
    window.APP = APP
}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}
