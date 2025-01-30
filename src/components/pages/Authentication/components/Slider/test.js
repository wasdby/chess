import { Slider } from './index.js'

const root = document.getElementById('root')

const net = {
  getPercent: () => Math.random() * 100
}

new Slider(net).mount(root)
