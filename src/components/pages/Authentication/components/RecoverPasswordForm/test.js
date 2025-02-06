import { RecoverPasswordForm } from './index.js'
import { Background } from '../Background/index.js'

new Background(
  new RecoverPasswordForm({
    onSubmit: (options) => {
      console.log(`email: ${options.email}`)
    }
  })
).mount(document.getElementById('root'))
