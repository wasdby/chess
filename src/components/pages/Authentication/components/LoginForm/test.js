import { Background } from '../Background/index.js'
import { LoginForm } from './index.js'

const component = new Background(
  new LoginForm({
    onForgotPasswordClick: () => {
      console.log('Forgot password clicked!')
    },
    onRegButtonClick: async () => {
      console.log('Reg button clicked!')
      await fetch('/api/auth', { method: 'POST' })
    },
    onLoginButtonClick: async (checked) => {
      console.log(`Login button clicked! Remember me: ${checked}`)
      await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ checked }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  })
)

component.mount(document.getElementById('root'))
