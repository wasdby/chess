export class Clickable {
  constructor (content, options) {
    this.content = content
    this.options = options
    this.container = null
  }

  mount (container) {
    this.container = container
    this.content.mount(container)
    container.addEventListener('click', () => this.options.onClick(this.content))
  }

  unmount () {
    this.content.unmount()
    this.container.removeEventListener('click', () => this.options.onClick(this.content))
  }
}
