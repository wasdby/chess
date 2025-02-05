import { LoadingForm } from './index.js'
import { Background } from '../Background/index.js'

const loading = new LoadingForm()

new Background(
  loading
).mount(document.getElementById('root'))

let i = 0
const itv = setInterval(() => {
  if (i > 100) clearInterval(itv)
  loading.progress = i / 100
  i++
  console.log(loading.progress)
}, 100)
