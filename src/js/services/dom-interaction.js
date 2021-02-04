import {SplitText as ST} from '../vendors/gsap/SplitText'
import {gsap } from 'gsap'
import { clamp, getRatio, wrap, ev, lerp } from '../utils/utils'

export default class DomInteraction {
  constructor(namesArray) {
    this.names = document.querySelectorAll('.name')
    this.NAMES = namesArray;
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
    console.log(this.NAMES.NAMES[1])
    for (let i = 0; i < this.NAMES.NAMES.length; i++) {
      this.names[i].innerText = this.NAMES.NAMES[i]
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
