import '../sass/styles.scss'
import Shuffle from './services/shuffle.js'
import Table from './services/Table'
import DomInteraction from './services/dom-interaction.js'

import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './menu/cursor';



const APP = window.APP || {}
let names = new Shuffle();
let dom = new DomInteraction(names);
const initApp = () => {
    window.APP = APP
    APP.Shuffle = names;

}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}
