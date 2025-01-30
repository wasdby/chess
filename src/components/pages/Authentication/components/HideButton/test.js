import { Input } from '../Input/index.js'
import { HideButton } from './index.js'

const root = document.getElementById('root')

const showBtn = new HideButton(handleButtonClick)
const placeholder = 'input'
const input = new Input({
  placeholder,
  onChanged: (text) => {
    toggleVisibility(showBtn.show)
  }
})

function handleButtonClick () {
  showBtn.show = !showBtn.show
  toggleVisibility(showBtn.show)
}

input.mount(root)

showBtn.mount(root)

const inputField = root.querySelector('.pages-input-wrapper').querySelector('input')
function toggleVisibility (value) {
  if (value) {
    inputField.type = 'password'
  } else {
    inputField.type = 'text'
  }
}
