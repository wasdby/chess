import { LoadingForm } from './index.js'
import { Background } from '../Background/index.js'

new Background(
  new LoadingForm({
    progress: Math.random() * 100
  })
).mount(document.getElementById('root'))
