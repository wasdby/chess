import { Tip } from './index.js'

const root = document.getElementById('root')

const tip = new Tip('Имя должно состоять из 3-16 символов и может содержать буквы, цифры, символы и пробелы.')

tip.mount(root)

setTimeout(() => {
  tip.unmount()
}, 5000)
