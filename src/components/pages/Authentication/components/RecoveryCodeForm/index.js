import { Composite } from '../../../../common/Composite/index.js'
import { Input } from '../Input/index.js'
import { Button } from '../Button/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { Header } from '../Header/index.js'
import { Label } from '../Label/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'
import { Stylable } from '../../../../atoms/Stylable/index.js'
import { Timer } from '../../../../pages/Authentication/components/Timer/index.js'
import { TimerIcon } from '../../../../pages/Authentication/components/TimerIcon/index.js'

export class RecoveryCodeForm extends Composite {
  constructor (options = {}) {
    const emailInput = new Stylable(new Input({
      placeholder: `${options.email}`
    }))
    emailInput.classList.add('inactive')

    const codeInput = new Input({
      placeholder: 'Введите код',
      rightDecorator: new List(
        new TimerIcon(),
        new Timer(options.timeout, {
          onTimeout: options.onTimeout
        })
      ),
      onChanged: options.onCodeInput
    })

    const cancelButton = new Clickable(new Button({
      text: 'ОТМЕНА',
      color: 'red',
    }), {
      onClick: options.onCancel
    })

    const submitButton = new Clickable(new Button({
      text: 'ПОДТВЕРДИТЬ',
      color: 'green',
    }), {
      onClick: options.onSubmit
    })

    const minutes = Math.floor(options.timeout / 60)
    const seconds = options.timeout - (minutes * 60)
    const timerLabel = `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`

    super(new Wrap(
      new List(
        new Header('ВОССТАНОВЛЕНИЕ ПАРОЛЯ'),
        emailInput,
        new Label('На указанную вами почту отправлено сообщение с кодом подтверждения.'),
        codeInput,
        new Label(`Отправить код повторно можно через ${timerLabel} сек.`),
        new Wrap(new List(
          cancelButton,
          submitButton
        ), {
          wrap: (container) => {
            const buttonsElement = document.createElement('div')
            buttonsElement.className = 'pages-recovery-code-form-buttons'
            container.appendChild(buttonsElement)
            return buttonsElement
          }
        })
      ), {
        wrap: (container) => {
          const formElement = document.createElement('div')
          formElement.className = 'pages-recovery-code-form'
          container.appendChild(formElement)
          return formElement
        }
      }
    ))
  }
}
