export class Raw {
  constructor(html) {
    const container = document.createElement('div')
    container.innerHTML = html
    this.element = container.firstChild
  }
  mount(container) { container.appendChild(this.element) }
  unmount() { this.element.parentElement.removeChild(this.element) }
}
