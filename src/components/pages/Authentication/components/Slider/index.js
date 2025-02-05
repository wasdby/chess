import { Raw } from '../../../../atoms/Raw/index.js'

export class Slider {
  constructor () {
    this.element = document.createElement('div')
    this.element.className = 'pages-slider'
    this.content = new Raw('<img src="./media/slider.svg"/>')
    this.progressBar = document.createElement('div')
    this.progressBar.className = 'pages-slider-progress'
    this._progress = 0
  }

  set progress (value) {
    this._progress = value
    const maxWidth = this.element.offsetWidth * 0.82
    const width = maxWidth * this._progress
    this.progressBar.style.width = Math.floor(width / this.element.offsetWidth * 100) + '%'
  }

  get progress () {
    return this._progress
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
