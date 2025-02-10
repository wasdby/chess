import { Raw } from '../../../../atoms/Raw/index.js'

export class Button {
  constructor ({ text, color, onClick }) {
    this.element = new Raw(`<button class='atoms-button-default atoms-button-${color}'>${text}</button>`)
    this.onClick = onClick
  }

  mount (container) {
    this.element.mount(container)
    this.element.element.addEventListener('click', this.onClick)
  }

  unmount () {
    this.element.element.removeEventListener('click', this.onClick)
    this.element.unmount()
  }
}
