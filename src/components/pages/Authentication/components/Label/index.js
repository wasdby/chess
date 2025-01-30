import { Raw } from '../../../../atoms/Raw/index.js'

export class Label {
  constructor (text) {
    this.element = new Raw(`<p class="pages-label">
      ${text}
    </p>`)
  }

  mount (container) {
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
  }
}
