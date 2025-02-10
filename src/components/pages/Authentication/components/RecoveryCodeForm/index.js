import { Composite } from '../../../../common/Composite/index.js'
import { Input } from '../Input/index.js'
import { Button } from '../Button/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { Header } from '../Header/index.js'
import { Label } from '../Label/index.js'
import { Stylable } from '../../../../atoms/Stylable/index.js'
import { Timer } from '../../../../pages/Authentication/components/Timer/index.js'
import { TimerIcon } from '../../../../pages/Authentication/components/TimerIcon/index.js'

export class RecoveryCodeForm extends Composite {
  constructor (options = {}) {
    const emailInput = new Stylable(new Input({
      placeholder: `${options.email}`
    }))
    emailInput.classList.add('inactive')

    let code = ''
    const codeInput = new Input({
      placeholder: 'Введите код',
      rightDecorator: new List(
        new TimerIcon(),
        new Timer(options.timeout, {
          onTimeout: options.onTimeout
        })
      ),
      onChanged: (text) => {
        code = text
      }
    })

    const cancelButton = new Button({
      text: 'ОТМЕНА',
      color: 'red',
      onClick: options.onCancel
    })

    const submitButton = new Button({
      text: 'ПОДТВЕРДИТЬ',
      color: 'green',
      onClick: () => options.onSubmit({ code })
    })

    super(new Wrap(
      new List(
        new Header('ВОССТАНОВЛЕНИЕ ПАРОЛЯ'),
        emailInput,
        new Label('На указанную вами почту отправлено сообщение с кодом подтверждения.'),
        codeInput,
        new Wrap(new List(
          new Label('Отправить код повторно можно через'),
          new Timer(options.timeout, {
            onTimeout: () => {}
          }),
          new Label('сек.')
        ), {
          wrap: (container) => {
            const label = document.createElement('div')
            label.className = 'pages-label'
            container.appendChild(label)
            return label
          }
        }),
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
