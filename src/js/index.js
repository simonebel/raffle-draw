import '../sass/styles.scss'
import DomInteraction from './services/dom-interaction.js'

import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './menu/cursor';



const APP = window.APP || {}

let dom = new DomInteraction();
const initApp = () => {
    window.APP = APP
    APP.DomInteraction = dom;

}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}
