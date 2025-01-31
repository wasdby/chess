import { Raw } from '../../../../atoms/Raw/index.js'

export class Header {
  constructor (text) {
    this.element = new Raw(`<p class='header'>${text}</p>`)
  }

  mount (container) {
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
  }
}
