export class Hoverable {
  constructor (content, options = {}) {
    this.content = content
    this.element = document.createElement('div')

    if (options.onEnter) {
      this.element.addEventListener('mouseenter', () => options.onEnter(this.content))
    }

    if (options.onLeave) {
      this.element.addEventListener('mouseleave', () => options.onLeave(this.content))
    }
  }

  mount (container) {
    container.appendChild(this.element)
    this.content.mount(this.element)
  }

  unmount () {
    this.content.unmount()
    this.element.parentElement.removeChild(this.element)
  }
}

export default Hoverable
