import { Text } from './index.js'

const container = document.getElementById('root')
const text1 = new Text('Hello Human!')
const text2 = new Text('Hello World!')

async function test () {
  text1.mount(container)
  await new Promise(resolve => setTimeout(resolve, 1000))
  text2.mount(container)
  await new Promise(resolve => setTimeout(resolve, 1000))
  text1.unmount()
  await new Promise(resolve => setTimeout(resolve, 1000))
  text2.unmount()
  await new Promise(resolve => setTimeout(resolve, 1000))
}

test()
