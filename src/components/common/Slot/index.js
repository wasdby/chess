export class Slot {
  constructor (content) {
    this.element = content
  }

  mount (container) {
    this.container = container
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
    this.container = undefined
  }

  replace (content) {
    this.element.unmount()
    this.element = content
    this.element.mount(this.container)
  }
}
