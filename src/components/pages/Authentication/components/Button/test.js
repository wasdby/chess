import { Button } from './index.js'

const сomponent = new Button({
  text: 'СОЗДАТЬ АККАУНТ',
  color: 'red',
  onClick: (content) => {
    console.log('Button clicked!', content)
  }
})

сomponent.mount(document.getElementById('root'))
