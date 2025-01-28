import { Text } from '../Text/index.js'
import { Stylable } from './index.js'

const component = new Stylable(new Text('Hello World!'))
component.mount(document.getElementById('root'))

async function test () {
  while (true) {
    component.classList.toggle('red')
    await new Promise(r => setTimeout(r, 1000))
  }
}

test()
