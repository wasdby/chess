export class Background {
  constructor (content) {
    this.content = content
    this.container = null
    this.backgroundElement = null
  }

  mount (container) {
    this.container = container
    this.backgroundElement = document.createElement('div')
    this.backgroundElement.className = 'background'

    this.content.mount(this.backgroundElement)
    container.appendChild(this.backgroundElement)
  }

  unmount () {
    this.content.unmount()
    this.container.removeChild(this.backgroundElement)
  }
}
