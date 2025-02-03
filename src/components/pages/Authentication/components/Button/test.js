import { Button } from './index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'

const сomponent = new Clickable(new Button({
  text: 'СОЗДАТЬ АККАУНТ',
  color: 'red',
}), {
  onClick: (content) => {
    console.log('Button clicked!')
  }
})

сomponent.mount(document.getElementById('root'))
