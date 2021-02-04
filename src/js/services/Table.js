import {SplitText as ST} from '../vendors/gsap/SplitText'
import {gsap } from 'gsap'
import { clamp, getRatio, wrap, ev, lerp } from '../utils/utils'


export default class Table {
  constructor () {
    this.names = document.querySelectorAll('.name')
    console.log(this.names);
    this.init()
  }

  init() {
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
}
