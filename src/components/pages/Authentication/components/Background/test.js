import { Text } from '../../../../atoms/Text/index.js'
import { Background } from './index.js'

const сomponent = new Background(
  new Text('Hello World')
)

сomponent.mount(document.getElementById('root'))
