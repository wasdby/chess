export class Clickable {
  constructor (content, options) {
    this.content = content
    this.options = options
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'clickable'
  }

  mount (container) {
    this.content.mount(this.wrapper)
    container.appendChild(this.wrapper)
    this.wrapper.addEventListener('click', () => this.options.onClick(this.content))
  }

  unmount () {
    this.wrapper.removeEventListener('click', () => this.options.onClick(this.content))
    this.content.unmount()
    if (this.wrapper.parentElement) {
      this.wrapper.parentElement.removeChild(this.wrapper)
    }
  }
}
