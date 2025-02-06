import { Background } from '../Background/index.js'
import { RegisterForm } from './index.js'

const component = new Background(
  new RegisterForm({
    onSwitchToLogin: () => {
      console.log('Login button clicked!')
    },
    onRegister: (registerData) => {
      console.log('Register button clicked!', registerData)
    },
    onSwitchToAgreement: () => {
      console.log('Agreement button clicked!')
    }
  })
)

component.mount(document.getElementById('root'))
