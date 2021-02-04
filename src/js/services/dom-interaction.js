import {SplitText as ST} from '../vendors/gsap/SplitText'
import {gsap } from 'gsap'
import { clamp, getRatio, wrap, ev, lerp } from '../utils/utils'
import Shuffle from './shuffle';


export default class DomInteraction {
  constructor() {
    this.names = document.querySelectorAll('.name')
    this.shuffle = new Shuffle();
    this.button = document.querySelector('.team__shuffle')

    this.init();
  }
  bindEvent() {
    this.button.addEventListener('click', () => {this.updateDom()})
  }

  init() {
    this.bindEvent()
  }

  updateDom() {
    this.shuffle.shuffle();
    for (let i = 0; i < this.shuffle.NAMES.length; i++) {
      this.names[i].innerText = this.shuffle.NAMES[i]
    }
  }

  animate() {
    this.stTexts = new ST(this.names, { type: 'lines', linesClass: 'line' })

    this.stTexts.lines.forEach((l) => {
      const div = document.createElement('div')
      div.classList.add('line-ctn')
      wrap(l, div)
    })

    const tl = gsap.timeline();
    const time = 0.5
    tl.fromTo(".line", time, {top:760}, {top:0})
    tl.to(".line", time, {top:-100})
    tl.repeat(-1)
  }
};
