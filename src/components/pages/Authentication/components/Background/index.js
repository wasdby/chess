import { Raw } from '../../../../atoms/Raw/index.js'

export class Background {
  constructor (src) {
    this.element = new Raw(`<div class='background' style=' background-image: url("${src}")'></div>`)
  }

  mount (container) {
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
  }
}
