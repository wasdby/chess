export class Slot {
  constructor (content) {
    this.element = content
    // this.slot = document.createElement('div')
    // this.slot.className = 'common-slot'
  }

  mount (container) {
    // container.appendChild(this.slot)
    // this.element.mount(this.slot)
    this.container = container
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
    // this.slot.parentElement.removeChild(this.slot)
  }

  replace (content) {
    this.element.unmount()
    this.element = content
    this.element.mount(this.container)
    // this.element.mount(this.slot)
  }
}
