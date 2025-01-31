import { Component, Container } from "../../../../component"

/**
 * Задний фон всей страницы
 */
export class Background implements Component {
  constructor(content: Component)
  mount(container: Container): void
  unmount(): void
}
