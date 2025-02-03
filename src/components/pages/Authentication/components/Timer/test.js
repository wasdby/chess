import { Timer } from './index.js'

const root = document.getElementById('root')

new Timer(10, {
  onTimeout: () => window.alert(123)
}).mount(root)

new Timer(1000, {
  onTimeout: () => window.alert(456)
}).mount(root)

const timer = new Timer(8, {
  onTimeout: () => timer.unmount()
})

timer.mount(root)
