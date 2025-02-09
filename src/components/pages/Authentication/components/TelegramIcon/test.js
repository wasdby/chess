import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { Label } from '../Label/index.js'
import { TelegramIcon } from './index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'
import { Background } from '../Background/index.js'
const root = document.getElementById('root')

const tgLink = new Clickable(new Wrap(new List(
  new Label('Чат игроков'),
  new TelegramIcon()
), {
  wrap: (container) => {
    const linkDiv = document.createElement('div')
    linkDiv.className = 'pages-tg-link'
    container.appendChild(linkDiv)
    return linkDiv
  }
}), {
  onClick: () => {
    window.location.href = 'https://web.telegram.org/a/'
  }
})

new Background(new List(
  tgLink
)).mount(root)
