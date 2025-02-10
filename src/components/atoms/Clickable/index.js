export class Clickable {
  constructor (content, options) {
    this.content = content
    this.options = options
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'clickable'
    this.handleClick = () => {
      this.options.onClick(this.content)
    }
  }

  mount (container) {
    this.content.mount(this.wrapper)
    container.appendChild(this.wrapper)
    this.wrapper.addEventListener('click', this.handleClick)
  }

  unmount () {
    this.wrapper.removeEventListener('click', this.handleClick)
    this.content.unmount()
    this.wrapper.parentElement.removeChild(this.wrapper)
  }
}
