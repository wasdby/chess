import { Component, Container } from "../../component"

/**
 * Компонент для замены отрисовываемых компонентов
 *
 * @example
 * const pageSlot = new Slot(new MyWelcomePage())
 * pageSlot.replace(new MyMainPage())
 * pageSlot.replace(new GamePage())
 */
export class Slot implements Component {
  constructor(content: Component)
  mount(container: Container): void
  unmount(): void
  replace(content: Component): void
}
