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
    this.button.addEventListener('click', () => {this.animate()})
  }

  init() {
    this.bindEvent()

    this.stTexts = new ST(this.names, { type: 'lines', linesClass: 'line' })

    this.stTexts.lines.forEach((l) => {
      const div = document.createElement('div')
      div.classList.add('line-ctn')
      wrap(l, div)
    })

    this.names = document.querySelectorAll('.line')
  }

  updateDom() {

    console.log();
    this.shuffle.shuffle();
    for (let i = 0; i < this.shuffle.NAMES.length; i++) {
      this.names[i].innerText = this.shuffle.NAMES[i]
    }
  }

  animate() {

    this.tl = gsap.timeline();
    const time = 0.5
    this.tl.fromTo(".line", time, {top:760}, {top:0}, "init")
    this.tl.to(".line", time, {top:-100 })
    this.tl.eventCallback("onComplete", this.updateDom())
    // this.tl.call(this.updateDom())
    this.tl.repeat(-1)

    this.kill()
  }

  kill() {
    setTimeout(() => {
      this.tl.eventCallback("onComplete", this.tl.kill())
    }, 5000)
  }
};
