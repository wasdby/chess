import { Composite } from '../../../../common/Composite/index.js'
import { Button } from '../Button/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { Header } from '../Header/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'

export class PasswordChangedForm extends Composite {
  constructor (options = {}) {
    super(new Wrap(
      new List(
        new Header('ПАРОЛЬ УСПЕШНО ИЗМЕНЕН'),
        new Clickable(new Button({
          text: 'ВХОД',
          color: 'green',
        }), {
          onClick: options.onLogin
        })
      ), {
        wrap: (container) => {
          const newContainer = document.createElement('div')
          newContainer.className = 'pages-password-changed-form'
          container.appendChild(newContainer)
          return newContainer
        }
      }
    ))
  }
}
