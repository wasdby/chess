import { Checkbox } from './index.js'

const component = new Checkbox({
  onChanged: (checked) => {
    console.log(`Checkbox is now ${checked ? 'checked' : 'unchecked'}`)
  }
})
component.mount(document.getElementById('root'))
