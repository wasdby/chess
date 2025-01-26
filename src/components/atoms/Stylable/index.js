export class Stylable {
  constructor(content) {
    this.content = content
    this.element = document.createElement('div')
  }
  mount(container) {
    container.appendChild(this.element)
    this.content.mount(this.element)
  }
  unmount() {
    this.content.unmount()
    this.element.parentElement.removeChild(this.element)
  }
  get classList() { return this.element.classList }
}
