import { Text } from '../Text/index.js'
import { Clickable } from './index.js'

const сomponent = new Clickable(new Text('Hello World!'), {
  onClick: (content) => {
    console.log('Text clicked!', content)
  }
})

сomponent.mount(document.getElementById('root'))
