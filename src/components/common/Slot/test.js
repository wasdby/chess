import { Checkbox } from '../../pages/Authentication/components/Checkbox/index.js'
import { TimerIcon } from '../../pages/Authentication/components/TimerIcon/index.js'
import { Slot } from './index.js'

const root = document.getElementById('root')

const slot = new Slot(new Checkbox({}))
slot.mount(root)
setTimeout(() => {
  slot.replace(new TimerIcon())
}, 3000)
