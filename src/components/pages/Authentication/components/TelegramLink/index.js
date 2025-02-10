import { Composite } from '../../../../common/Composite/index.js'
import { TelegramIcon } from '../TelegramIcon/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { Label } from '../Label/index.js'
import { List } from '../../../../common/List/index.js'

export class TelegramLink extends Composite {
  constructor (options) {
    super(
      new Wrap(
        new List(
          new Label('Чат игроков'),
          new TelegramIcon()
        ), {
          wrap: (container) => {
            const linkDiv = document.createElement('a')
            linkDiv.className = 'pages-tg-link'
            linkDiv.href = options.link
            container.appendChild(linkDiv)
            return linkDiv
          }
        })
    )
  }
}
