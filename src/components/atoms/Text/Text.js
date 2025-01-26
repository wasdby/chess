export class Text {
  constructor(text) {
    this.element = document.createElement('p')
    this.element.appendChild(text)
  }
  mount(container) {
    container.appendChild(this.element)
  }
  unmount() {
    this.element.parentElement.removeChild(this.element)
  }
}
