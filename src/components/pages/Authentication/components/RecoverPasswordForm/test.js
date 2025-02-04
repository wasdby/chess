import { RecoverPasswordForm } from './index.js'
import { Background } from '../Background/index.js'

new Background(
  new RecoverPasswordForm({
    onEmailInput: (text) => {
      console.log(text)
    },
    onSendButtonClick: () => {
      console.log('button clicked')
    }
  })
).mount(document.getElementById('root'))
