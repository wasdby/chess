import { Composite } from '../../../../common/Composite/index.js'
import { Input } from '../Input/index.js'
import { Button } from '../Button/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { Header } from '../../../../pages/Authentication/components/Header/index.js'
import { Label } from '../../../../pages/Authentication/components/Label/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'

export class RecoverPasswordForm extends Composite {
  constructor (options = {}) {
    const emailInput = new Input({
      placeholder: 'E-mail',
      onChanged: options.onEmailInput
    })

    const sendButton = new Clickable(new Button({
      text: 'Отправить',
      color: 'green',
    }), {
      onClick: options.onSendButtonClick
    })

    super(new Wrap(
      new List(
        new Header('ВОССТАНОВЛЕНИЕ ПАРОЛЯ'),
        emailInput,
        new Label('Введите e-mail используемый при регистрации'),
        sendButton
      ), {
        wrap: (container) => {
          const formElement = document.createElement('div')
          formElement.className = 'pages-recover-form'
          container.appendChild(formElement)
          return formElement
        }
      }
    ))
  }
}
