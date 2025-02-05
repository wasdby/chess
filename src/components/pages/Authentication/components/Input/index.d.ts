import { Component, Container } from '../../../../component'

/**
 * Поле ввода для логина/почты/пароля/кода
 */
export class Input implements Component {
  constructor (
    options: {
      placeholder: string,
      rightDecorator?: Component
      onChanged?: (text: string) => void
    }
  )
  mount (container: Container): void
  unmount (): void
  get text (): string
  set text (text: string)
}
