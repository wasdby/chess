export class Wrap {
  constructor (content, options) {
    this.wrap = options.wrap
    this.content = content
  }

  mount (container) {
    this.element = this.wrap(container)
    this.content.mount(this.element)
  }

  unmount () {
    this.content.unmount()
    this.element.parentElement.removeChild(this.element)
  }
}
