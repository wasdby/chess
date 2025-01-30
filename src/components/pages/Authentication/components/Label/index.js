export class Label {
  constructor (text) {
    this.text = text
    this.element = document.createElement('p')
    this.element.className = 'pages-label'
    this.element.innerText = text
  }

  mount (container) {
    this.container = container
    container.appendChild(this.element)
  }

  unmount () {
    if (this.container && this.element) {
      this.container.removeChild(this.element)
    }
  }
}
