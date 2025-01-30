export class Checkbox {
  constructor (options = {}) {
    this.options = options
    this.element = document.createElement('input')
    this.element.type = 'checkbox'
    this.element.className = 'checkbox'
    this.element.checked = false

    this.element.addEventListener('change', (event) => {
      // @ts-ignore
      this.handleChange(event.target.checked)
    })
  }

  mount (container) {
    container.appendChild(this.element)
  }

  unmount () {
    if (this.element.parentElement) {
      this.element.parentElement.removeChild(this.element)
    }
  }

  get checked () {
    return this.element.checked
  }

  set checked (value) {
    this.element.checked = value
    this.handleChange(value)
  }

  handleChange (value) {
    if (this.options.onChanged) {
      this.options.onChanged(value)
    }
  }
}
