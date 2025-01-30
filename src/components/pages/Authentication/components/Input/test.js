import { Input } from './index.js'
import { Tip } from '../Tip/index.js'
import { HideButton } from '../HideButton/index.js'
import { Raw } from '../../../../atoms/Raw/index.js'
import { TimerIcon } from '../TimerIcon/index.js'
import { Timer } from '../Timer/index.js'
import { Label } from '../Label/index.js'

const flex = document.createElement('div')
flex.id = 'flex'
const root = document.getElementById('root')
root.appendChild(flex)
flex.style.display = 'flex'
flex.style.flexFlow = 'row wrap'
const component = new Input({
  placeholder: 'E-mail',
  rightDecorator: new Tip('Имя должно состоять из 3-16 символов и может содержать буквы, цифры, символы и пробелы.'),
  onChanged: (text) => console.log(text),
})
component.mount(document.getElementById('flex'))

const component2 = new Input({
  placeholder: 'E-mail',
  rightDecorator: new Raw('<div id=\'timer-div\'></div>'),
  onChanged: (text) => console.log(text),
})
component2.mount(document.getElementById('flex'))

const timerDiv = document.getElementById('timer-div')
new TimerIcon().mount(timerDiv)
new Timer(120, {
  onTimeout: () => {}
}).mount(timerDiv)

new Label('Заполните поле пароля').mount(root)

const component3 = new Input({
  placeholder: 'E-mail',
  rightDecorator: new Raw('<div id="right" ></div>'),
  onChanged: (text) => console.log(text),
})
component3.mount(document.getElementById('root'))
const right = document.getElementById('right')

new HideButton(() => {}).mount(right)
new Tip('Подсказка').mount(right)

component3.text = '123'
console.log(component3.text)
