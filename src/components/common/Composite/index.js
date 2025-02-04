export class Composite {
  constructor (component) {
    this.component = component
  }

  mount (container) {
    this.component.mount(container)
  }

  unmount () {
    this.component.unmount()
  }
}
