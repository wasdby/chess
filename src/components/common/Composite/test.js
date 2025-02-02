import { Text } from '../../atoms/Text/index.js'
import { Composite } from './index.js'

class Label extends Composite {
  constructor () {
    super(new Text('Hi'))
  }
}

new Label().mount(document.getElementById('root'))
