import { Hoverable } from './index.js'
import { Text } from '../Text/index.js'

const root = document.getElementById('root')

const hover = new Hoverable(
  new Text('HOVER ON ME'),
  {
    onEnter: (text) => window.alert(`Text: ${text}`),
    onLeave: (text) => text.unmount()
  }
)

hover.mount(root)
