import { Raw } from '../../../../atoms/Raw/index.js'
import { Composite } from '../../../../common/Composite/index.js'

export class DiceIcon extends Composite {
  constructor () {
    super(
      new Raw(`<div class="pages-dice-icon">
        <img src="./media/dice.svg"/>
      </div>`)
    )
  }
}
