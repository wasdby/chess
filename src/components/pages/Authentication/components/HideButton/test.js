import { HideButton } from './index.js'

const root = document.getElementById('root')

const showBtn = new HideButton(handleButtonClick)

function handleButtonClick () {
  showBtn.show = !showBtn.show
  toggleVisibility(showBtn.show)
}
document.createElement('input')
showBtn.mount(root)

const inputField = root.querySelector('input')
function toggleVisibility (value) {
  if (value) {
    inputField.type = 'password'
  } else {
    inputField.type = 'text'
  }
}
