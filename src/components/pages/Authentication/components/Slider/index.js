import { Raw } from '../../../../atoms/Raw/index.js'

export class Slider {
  constructor (net) {
    this.net = net
    this.element = document.createElement('div')
    this.element.className = 'pages_slider'
  }

  mount (container) {
    container.appendChild(this.element)

    const content = new Raw('<img src="./media/slider.svg"/>')

    content.mount(this.element)

    const progress = document.createElement('div')
    progress.className = 'pages-slider-progress'

    const maxWidth = 620
    const width = maxWidth / 100 * this.net.getPercent()
    console.log(width)
    progress.style.width = Math.floor(width) + 'px'
    this.element.appendChild(progress)
  }

  unmount () {
    this.element.parentElement.removeChild(this.element)
  }
}
