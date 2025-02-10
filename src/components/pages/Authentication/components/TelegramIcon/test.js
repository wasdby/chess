import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { Label } from '../Label/index.js'
import { TelegramIcon } from './index.js'
import { Background } from '../Background/index.js'
const root = document.getElementById('root')

const tgLink = new Wrap(new List(
  new Label('Чат игроков'),
  new TelegramIcon()
), {
  wrap: (container) => {
    const linkDiv = document.createElement('a')
    linkDiv.className = 'pages-tg-link'
    linkDiv.href = 'https://web.telegram.org'
    container.appendChild(linkDiv)
    return linkDiv
  }
})

new Background(new List(
  tgLink
)).mount(root)
