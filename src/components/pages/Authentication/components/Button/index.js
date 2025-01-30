import { Raw } from '../../../../atoms/Raw/index.js'

export class Button {
  constructor ({ text, color }) {
    this.element = new Raw(`<button class='atoms_button_default atoms_button_${color}'>${text}</button>`)
  }

  mount (container) {
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
  }
}
