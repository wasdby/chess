import { TelegramLink } from './index.js'
import { Background } from '../Background/index.js'
const root = document.getElementById('root')

const tgLink = new TelegramLink({
  link: 'https://web.telegram.org/k/'
})

new Background(tgLink).mount(root)
