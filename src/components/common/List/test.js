import { Text } from '../../atoms/Text/index.js'
import { List } from './index.js'

const component = new List(
  new Text('АКЦИЯ!'),
  new Text('Сегодня и только'),
  new Text('СЕЙЧАС'),
  new Text('чебуреки 1+1 в'),
  new Text('ПОДАРОК')
)

component.mount(document.getElementById('root'))

setTimeout(() => {
  component.unmount()
}, 3000)
