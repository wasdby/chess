import { NewPasswordForm } from './index.js'
import { Background } from '../Background/index.js'

new Background(
  new NewPasswordForm({
    onSubmit: (options) => {
      console.log(options.password, options.repeatedPassword)
    },
    onCancel: () => {
      console.log('cancel clicked')
    }
  })
).mount(document.getElementById('root'))
