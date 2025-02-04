import { Background } from '../Background/index.js'
import { LoginForm } from './index.js'

const component = new Background(
  new LoginForm({
    onCheckboxChanged: (checked) => {
      console.log(`Checkbox is now ${checked ? 'checked' : 'unchecked'}`)
    },
    onForgotPasswordClick: () => {
      console.log('Forgot password clicked!')
    },
    onAuthButtonClick: async () => {
      console.log('Auth button clicked!')
      await fetch('/api/auth', { method: 'POST' })
    },
    onLoginButtonClick: async () => {
      console.log('Login button clicked!')
      await fetch('/api/login', { method: 'POST' })
    }
  })
)

component.mount(document.getElementById('root'))
