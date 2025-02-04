import { Nothing } from '../../../../atoms/Nothing/index.js'

export class Input {
  constructor ({
    placeholder = '',
    rightDecorator = new Nothing(),
    onChanged = () => {}
  }) {
    this.placeholder = placeholder
    this.onChanged = onChanged
    this.rightDecorator = rightDecorator

    this.element = document.createElement('input')
    this.element.className = 'pages-input'
    this.element.onchange = (event) => this.onChanged(event.target.value)
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'pages-input-wrapper'
    this.rightDecoratorWrapper = document.createElement('div')
    this.rightDecoratorWrapper.className = 'pages-input-right-decorator-wrapper'
  }

  mount (container) {
    this.element.placeholder = this.placeholder

    this.wrapper.appendChild(this.element)
    if (this.rightDecorator) {
      this.wrapper.appendChild(this.rightDecoratorWrapper)
      this.rightDecorator.mount(this.rightDecoratorWrapper)
    }

    container.appendChild(this.wrapper)
  }

  get text () {
    return this.element.value
  }

  set text (text) {
    this.element.value = text
  }

  unmount () {
    this.wrapper.parentElement.removeChild(this.wrapper)
  }
}
