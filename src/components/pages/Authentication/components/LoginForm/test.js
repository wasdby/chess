import { Background } from '../Background/index.js'
import { LoginForm } from './index.js'

const component = new Background(
  new LoginForm({
    onForgotPassword: () => {
      console.log('Forgot password clicked!')
    },
    onSwitchToRegister: async () => {
      console.log('Reg button clicked!')
      await fetch('/api/auth', { method: 'POST' })
    },
    onLogin: async (loginData) => {
      console.log('Login button clicked!', loginData)
      await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  })
)

component.mount(document.getElementById('root'))
