import { Raw } from '../../../../atoms/Raw/index.js'

export class Timer {
  constructor (timeout, options) {
    this.timeout = timeout
    this.onTimeout = options.onTimeout

    this.element = document.createElement('div')
    this.element.className = 'pages-timer'
  }

  mount (container) {
    container.appendChild(this.element)

    const content = new Raw('<p class="pages-timer-text"></p>')
    content.mount(this.element)

    const text = this.element.querySelector('.pages-timer-text')
    const timer = setInterval(() => {
      if (this.timeout === 0) {
        clearInterval(timer)
        return this.onTimeout()
      }
      this.timeout -= 1
      const minutes = Math.floor(this.timeout / 60)
      const seconds = this.timeout - (minutes * 60)
      text.innerHTML = `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`
    }, 1000)
  }

  unmount () {
    this.element.parentElement.removeChild(this.element)
  }
}
