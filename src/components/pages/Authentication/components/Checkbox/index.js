export class Checkbox {
  constructor (options = {}) {
    this.element = document.createElement('input')
    this.element.type = 'checkbox'
    this.element.className = 'checkbox'
    this.element.checked = false

    this.onChanged = (value) => {
      if (options.onChanged) {
        options.onChanged(value)
      }
    }

    this.element.addEventListener('change', (event) => {
      this.onChanged(event.target.checked)
    })
  }

  mount (container) {
    container.appendChild(this.element)
  }

  unmount () {
    this.element.parentElement.removeChild(this.element)
  }

  get checked () {
    return this.element.checked
  }

  set checked (value) {
    this.element.checked = value
    this.onChanged(value)
  }
}
