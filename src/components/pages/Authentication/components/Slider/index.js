import { Raw } from '../../../../atoms/Raw/index.js'

export class Slider {
  constructor () {
    this.element = document.createElement('div')
    this.element.className = 'pages-slider'
    this.percent = 0
    this.content = new Raw('<img src="./media/slider.svg"/>')
    this.progressBar = document.createElement('div')
    this.progressBar.className = 'pages-slider-progress'
  }

  set progress (value) {
    this.percent = value
    const maxWidth = this.element.offsetWidth * 0.82
    const width = maxWidth / 100 * this.percent
    this.progressBar.style.width = Math.floor(width / this.element.offsetWidth * 100) + '%'
  }

  get progress () {
    return this.percent
  }

  mount (container) {
    container.appendChild(this.element)
    this.content.mount(this.element)
    this.element.appendChild(this.progressBar)
  }

  unmount () {
    this.content.unmount()
    this.element.parentElement.removeChild(this.element)
  }
}
