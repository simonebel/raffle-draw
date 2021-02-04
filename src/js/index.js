import '../sass/styles.scss'
import Shuffle from './services/shuffle.js'
import Table from './services/Table'
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './menu/cursor';



const APP = window.APP || {}
// let names = new Shuffle();
// console.log(names.NAMES);
// console.log(names.shuffle())
// console.log(names.shuffle())
// console.log(names.shuffle())
// console.log(names.shuffle())

const initApp = () => {
    window.APP = APP
    APP.Table = new Table()
}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}
