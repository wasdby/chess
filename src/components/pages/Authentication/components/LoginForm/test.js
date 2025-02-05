import { Background } from '../Background/index.js'
import { LoginForm } from './index.js'

const component = new Background(
  new LoginForm({
    onForgotPassword: () => {
      console.log('Forgot password clicked!')
    },
    onSwitchToRegister: () => {
      console.log('Reg button clicked!')
    },
    onLogin: (loginData) => {
      console.log('Login button clicked!', loginData)
    }
  })
)

component.mount(document.getElementById('root'))
