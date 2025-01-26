import { Component, Container } from "../../component"

/**
 * Компонент для обработки кликов на элементы интерфейса
 *
 * @example
 * new Clickable(
 *   new MyButtonContent(),
 *   { onClick: myButtonContent => myButtonContent.animate() }
 * )
 */
export class Clickable<T extends Component> implements Component {
  constructor(
    content: T,
    options: {
      onClick: (container: T) => void
    }
  )
  mount(container: Container): void
  unmount(): void
}

