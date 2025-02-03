import { Raw } from '../Raw/index.js'
import { Wrap } from './index.js'

const root = document.getElementById('root')

new Wrap(new Raw('<p>123</p>'), {
  wrap: (container) => {
    const div = document.createElement('div')
    container.appendChild(div)
    return div
  }
}).mount(root)

new Wrap(new Raw('<p>456</p>'), {
  wrap: (container) => {
    return container
  }
}).mount(root)
