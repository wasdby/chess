import { Clickable } from '../../../../atoms/Clickable/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { Composite } from '../../../../common/Composite/index.js'
import { DiceIcon } from '../DiceIcon/index.js'

export class RandomButton extends Composite {
  constructor (onClick) {
    super(new Wrap(new Clickable(new DiceIcon(), {
      onClick
    }), {
      wrap: (container) => {
        const newContainer = document.createElement('div')
        newContainer.className = 'pages-random-button'
        container.appendChild(newContainer)
        return newContainer
      }
    })
    )
  }
}
