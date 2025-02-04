import { Composite } from '../../../../common/Composite/index.js'
import { Input } from '../Input/index.js'
import { Button } from '../Button/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { Header } from '../Header/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'

export class NewPasswordForm extends Composite {
  constructor (options = {}) {
    const passwordInput = new Input({
      placeholder: 'Введите пароль',
      onChanged: options.onPasswordInput
    })

    const passwordRepeatInput = new Input({
      placeholder: 'Повторите пароль',
      onChanged: options.onPasswordRepeat
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

    super(new Wrap(
      new List(
        new Header('НОВЫЙ ПАРОЛЬ'),
        passwordInput,
        passwordRepeatInput,
        new Wrap(new List(
          cancelButton,
          submitButton
        ), {
          wrap: (container) => {
            const buttonsElement = document.createElement('div')
            buttonsElement.className = 'pages-new-password-form-buttons'
            container.appendChild(buttonsElement)
            return buttonsElement
          }
        })
      ), {
        wrap: (container) => {
          const formElement = document.createElement('div')
          formElement.className = 'pages-new-password-form'
          container.appendChild(formElement)
          return formElement
        }
      }
    ))
  }
}
