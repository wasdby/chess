export class Slot {
  constructor (content) {
    this.element = content
    this.slot = document.createElement('div')
    this.slot.className = 'common-slot'
    // this.slot = new Raw('<div class="common-slot"></div>')
  }

  mount (container) {
    container.appendChild(this.slot)
    this.element.mount(this.slot)
  }

  unmount () {
    this.element.unmount()
    this.slot.parentElement.removeChild(this.slot)
  }

  replace (content) {
    this.element.unmount()
    this.element = content
    this.element.mount(this.slot)
  }
}
