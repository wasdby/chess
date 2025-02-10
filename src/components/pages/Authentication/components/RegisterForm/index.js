import { List } from '../../../../common/List/index.js'
import { Header } from '../Header/index.js'
import { Input } from '../Input/index.js'
import { Checkbox } from '../Checkbox/index.js'
import { Label } from '../Label/index.js'
import { Button } from '../Button/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { Composite } from '../../../../common/Composite/index.js'
import { HideButton } from '../HideButton/index.js'
import { Tip } from '../Tip/index.js'
import { Raw } from '../../../../atoms/Raw/index.js'

export class RegisterForm extends Composite {
  constructor (options = {}) {
    const hideButton = new HideButton(() => {
      passwordInput.element.type = passwordInput.element.type === 'text' ? 'password' : 'text'
    })
    const repeatHideButton = new HideButton(() => {
      repeatPasswordInput.element.type = repeatPasswordInput.element.type === 'text' ? 'password' : 'text'
    })

    let errorMessage = ''
    const errorLabel = new Raw('<p class="error-label"><p>')

    let newsCheckboxState = false
    let agreementCheckboxState = false

    let usernameValid = false
    let emailValid = false
    let passwordValid = false
    let repeatPasswordValid = false

    const usernameInput = new Input({
      placeholder: 'Имя пользователя',
      rightDecorator: new Tip('Имя должно состоять из 3-16 символов и может содержать буквы, цифры, символы и пробелы.'),
      onChanged: (text) => {
        const usernameRegex = /^.{3,16}$/
        if (!usernameRegex.test(text)) {
          usernameValid = false
          errorMessage = 'Имя не соответствует требованиям.'
        } else {
          usernameValid = true
          errorMessage = ''
        }
        errorLabel.element.textContent = errorMessage
      },
    })

    const emailInput = new Input({
      placeholder: 'E-mail',
      onChanged: (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(text)) {
          emailValid = false
          errorMessage = 'Введите корректный E-mail.'
        } else {
          emailValid = true
          errorMessage = ''
        }
        errorLabel.element.textContent = errorMessage
      },
    })

    const passwordInput = new Input({
      placeholder: 'Введите пароль',
      rightDecorator: new List(hideButton, new Tip('Пароль должен содержать не менее 7 символов, не менее 1 цифры, не менее 1 буквы и не должны содержать пробелы.<br><br><br><br> Если вы забудете пароль, мы можем восстановить его с помощью вашего мобильного телефона')),
      onChanged: (text) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[^\s]{7,}$/
        if (!passwordRegex.test(text)) {
          passwordValid = false
          errorMessage = 'Пароль не соответствует требованиям.'
        } else {
          passwordValid = true
          errorMessage = ''
        }
        // Check if repeat password matches
        if (repeatPasswordInput.element.value && text !== repeatPasswordInput.element.value) {
          repeatPasswordValid = false
          errorMessage = 'Пароли не совпадают.'
        } else if (repeatPasswordInput.element.value) {
          repeatPasswordValid = true
        }
        errorLabel.element.textContent = errorMessage
      },
    })
    passwordInput.element.type = 'password'

    const repeatPasswordInput = new Input({
      placeholder: 'Повторите пароль',
      rightDecorator: repeatHideButton,
      onChanged: (text) => {
        if (text !== passwordInput.element.value) {
          repeatPasswordValid = false
          errorMessage = 'Пароли не совпадают.'
        } else {
          repeatPasswordValid = true
          errorMessage = ''
        }
        errorLabel.element.textContent = errorMessage
      },
    })
    repeatPasswordInput.element.type = 'password'

    super(
      new Wrap(
        new List(
          new Header('РЕГИСТРАЦИЯ'),
          new Wrap(
            new List(
              usernameInput,
              new Label('*')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-name'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new List(
              emailInput,
              new Label('*')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-email'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new List(
              passwordInput,
              new Label('*')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-password'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new List(
              repeatPasswordInput,
              new Label('*')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-rep-password'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new List(
              new Checkbox({
                onChanged: (checked) => {
                  newsCheckboxState = checked
                },
              }),
              new Label('Присылать мне новости и специальные предложения')
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-news-check'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Wrap(
            new List(
              new Checkbox({
                onChanged: (checked) => {
                  agreementCheckboxState = checked
                },
              }),
              new Wrap(
                new List(
                  new Label('Я прочитал(-а) и принимаю&nbsp'),
                  new Clickable(
                    new Label('условия пользовательского соглашения'),
                    {
                      onClick: async () => {
                        if (options.onSwitchToAgreement) {
                          await options.onSwitchToAgreement()
                        }
                      },
                    }
                  )
                ),
                {
                  wrap: (container) => {
                    const element = document.createElement('div')
                    element.className = 'register-form-agreement-link'
                    container.appendChild(element)
                    return element
                  },
                }
              )

            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-agreement-check'
                container.appendChild(element)
                return element
              },
            }
          ),
          new Button({
            text: 'СОЗДАТЬ АККАУНТ',
            color: 'red',
            onClick: async () => {
              if (usernameValid && emailValid && passwordValid && repeatPasswordValid && agreementCheckboxState) {
                if (options.onRegister) {
                  const registerData = {
                    username: usernameInput.element.value,
                    email: emailInput.element.value,
                    password: passwordInput.element.value,
                    sendNews: newsCheckboxState,
                  }
                  await options.onRegister(registerData)
                  errorMessage = ''
                }
              } else {
                if (!usernameValid && !emailValid && !passwordValid && !repeatPasswordValid && !agreementCheckboxState) {
                  errorMessage = 'Заполните корректно все поля.'
                }
                if (usernameValid && emailValid && passwordValid && repeatPasswordValid && !agreementCheckboxState) {
                  errorMessage = 'Вы должны принять условия пользовательского соглашения.'
                }
                errorLabel.element.textContent = errorMessage
              }
            }
          }),
          errorLabel,
          new Wrap(
            new List(
              new Label('Есть аккаунт?'),
              new Clickable(
                new Label('ВОЙТИ'),
                {
                  onClick: async () => {
                    if (options.onSwitchToLogin) {
                      await options.onSwitchToLogin()
                    }
                  },
                }
              )
            ),
            {
              wrap: (container) => {
                const element = document.createElement('div')
                element.className = 'register-form-login'
                container.appendChild(element)
                return element
              },
            }
          )
        ),
        {
          wrap: (container) => {
            const formElement = document.createElement('div')
            formElement.className = 'register-form'
            container.appendChild(formElement)
            return formElement
          },
        }
      )
    )
  }
}
