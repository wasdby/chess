import { HideButton } from './index.js'

const root = document.getElementById('root')

const showBtn = new HideButton(handleButtonClick)

function handleButtonClick () {
  showBtn.show = !showBtn.show
  toggleVisibility(showBtn.show)
}
const inputField = document.createElement('input')
root.appendChild(inputField)
showBtn.mount(root)

function toggleVisibility (value) {
  if (value) {
    inputField.type = 'password'
  } else {
    inputField.type = 'text'
  }
}
