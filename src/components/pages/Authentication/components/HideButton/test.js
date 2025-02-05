import { HideButton } from './index.js'

const root = document.getElementById('root')
const inputField = document.querySelector('input')

const showBtn = new HideButton(handleButtonClick)
showBtn.mount(root)

function handleButtonClick () {
  showBtn.show = !showBtn.show
  inputField.type = showBtn.show ? 'password' : 'text'
}
