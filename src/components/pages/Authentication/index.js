import { Composite } from '../../common/Composite/index.js'
import { Slot } from '../../common/Slot/index.js'
import { LoadingForm } from './components/LoadingForm/index.js'
import { Background } from './components/Background/index.js'
import { LoginForm } from './components/LoginForm/index.js'
import { RegisterForm } from './components/RegisterForm/index.js'
import { NewPasswordForm } from './components/NewPasswordForm/index.js'
import { RecoveryCodeForm } from './components/RecoveryCodeForm/index.js'
import { PasswordChangedForm } from './components/PasswordChangedForm/index.js'
import { RecoverPasswordForm } from './components/RecoverPasswordForm/index.js'

export class Authentication extends Composite {
  constructor () {
    const loadingForm = new LoadingForm()
    let i = 0
    const itv = setInterval(() => {
      if (i > 100) {
        slot.replace(loginForm)
        clearInterval(itv)
      }
      loadingForm.progress = i / 100
      i++
    }, 100)
    const loginForm = new LoginForm({
      onForgotPassword: () => {
        slot.replace(recoveryPasswordForm)
        console.log('Forgot password clicked!')
      },
      onSwitchToRegister: () => {
        slot.replace(registerForm)
      },
      onLogin: (loginData) => {
        console.log('Login button clicked!', loginData)
      }
    })
    const newPasswordForm = new NewPasswordForm({
      onSubmit: (options) => {
        slot.replace(passwordChangedForm)
        console.log(options.password, options.repeatedPassword)
      },
      onCancel: () => {
        slot.replace(loginForm)
        console.log('cancel clicked')
      }
    })
    const passwordChangedForm = new PasswordChangedForm({
      onLogin: () => {
        console.log('login button clicked')
      }
    })
    const recoveryPasswordForm = new RecoverPasswordForm({
      onSubmit: (options) => {
        slot.replace(recoveryCodeForm)
        console.log(`email: ${options.email}`)
      }
    })
    const registerForm = new RegisterForm({
      onSwitchToLogin: () => {
        slot.replace(loginForm)
        console.log('Login button clicked!')
      },
      onRegister: (registerData) => {
        console.log('Register button clicked!', registerData)
      },
      onSwitchToAgreement: () => {
        console.log('Agreement button clicked!')
      }
    })
    const recoveryCodeForm = new RecoveryCodeForm({
      email: 'test@mail.com',
      timeout: 15,
      onSubmit: (options) => {
        slot.replace(newPasswordForm)
        console.log(`code: ${options.code}`)
      },
      onCancel: () => {
        slot.replace(loginForm)
        console.log('button clicked')
      },
      onTimeout: () => {
        console.log('time out')
      }
    })
    const slot = new Slot(loadingForm)
    super(
      new Background(
        slot
      )
    )
  }
}
