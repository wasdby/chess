import { PasswordChangedForm } from './index.js'
import { Background } from '../Background/index.js'

new Background(
  new PasswordChangedForm({
    onLogin: () => {
      console.log('login button clicked')
    }
  })
).mount(document.getElementById('root'))
