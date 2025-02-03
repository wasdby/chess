import { SplashScreen } from './index.js'

const root = document.getElementById('root')
const div1 = document.createElement('div')
const div2 = document.createElement('div')
root.appendChild(div1)
div1.style.width = '300px'
root.appendChild(div2)
div2.style.width = '40vw'
new SplashScreen().mount(div1)
new SplashScreen().mount(div2)
