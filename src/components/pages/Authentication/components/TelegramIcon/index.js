import { Raw } from '../../../../atoms/Raw/index.js'
import { Composite } from '../../../../common/Composite/index.js'

export class TelegramIcon extends Composite{
  constructor () {
    super(
      new Raw(`<div class="pages-telegram-icon">
          <img src="./media/tg-icon.svg"/>
        </div>`
      )
    )
  }
}
