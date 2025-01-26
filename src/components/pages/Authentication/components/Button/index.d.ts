import { Component, Container } from "../../../../component"

/**
 * Кнопка СОЗДАТЬ АККАУНТ/ОТПРАВИТЬ/ОТМЕНА/ПОДТВЕРДИТЬ/ВХОД
 */
export class Button implements Component {
  constructor(
    options: {
      text: string,
      color: string,
      onClick?: (button: Button) => void,
    }
  )
  mount(container: Container): void
  unmount(): void
}
