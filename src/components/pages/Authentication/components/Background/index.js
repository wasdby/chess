import { Wrap } from '../../../../atoms/Wrap/index.js'

export class Background {
  constructor (content) {
    this.content = content
    this.wrap = new Wrap(content, {
      wrap: (container) => {
        const backgroundElement = document.createElement('div')
        backgroundElement.className = 'background'
        container.appendChild(backgroundElement)
        return backgroundElement
      }
    })
  }

  mount (container) {
    this.wrap.mount(container)
  }

  unmount () {
    this.wrap.unmount()
  }
}
