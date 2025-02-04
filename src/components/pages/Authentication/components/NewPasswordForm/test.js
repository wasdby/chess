import { NewPasswordForm } from './index.js'
import { Background } from '../Background/index.js'

new Background(
  new NewPasswordForm({
    onPasswordInput: (text) => {
      console.log(text)
    },
    onPasswordRepeat: (text) => {
      console.log(text)
    },
    onSubmit: () => {
      console.log('submit clicked')
    },
    onCancel: () => {
      console.log('cancel clicked')
    }
  })
).mount(document.getElementById('root'))
