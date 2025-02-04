export class List {
  constructor (...components) {
    this.components = components
  }

  mount (container) {
    this.components.forEach(component => {
      component.mount(container)
    })
  }

  unmount () {
    this.components.slice().reverse().forEach(component => {
      component.unmount()
    })
  }
}
