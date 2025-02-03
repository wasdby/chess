import { Slider } from './index.js'

const root = document.getElementById('root')

const slider = new Slider()
slider.mount(root)
let i = 1
const intv = setInterval(() => {
  slider.progress = i++
  if (i > 100) clearInterval(intv)
}, 100)
