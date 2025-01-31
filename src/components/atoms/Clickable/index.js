export class Clickable {
  constructor (content, options) {
    this.content = content
    this.options = options
    this.container = null
    this.wrapper = null
  }

  mount (container) {
    this.container = container
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'clickable'
    this.content.mount(this.wrapper)

    container.appendChild(this.wrapper)
    this.wrapper.addEventListener('click', () => this.options.onClick(this.content))
  }

  unmount () {
    this.wrapper.removeEventListener('click', () => this.options.onClick(this.content))
    this.content.unmount()
    this.container.removeChild(this.wrapper)
  }
}
