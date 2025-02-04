import { Component, Container } from "../../component";

/**
 * Базовый класс для компонентов состоящих исключительно из других компонентов
 *
 * @example До
 *
 * class Background {
 *   constructor(content) {
 *     this.back = new Wrap(
 *       content,
 *       {
 *         wrap: (container) => {
 *           // create wrap container
 *         }
 *       }
 *     )
 *   }
 *   mount(container) {
 *     this.back.mount(container)
 *   }
 *   unmount() {
 *     this.back.unmount()
 *   }
 * }
 *
 * @example После
 *
 * class Background extends Composite {
 *   constructor(content) {
 *     super(new Wrap(
 *       content,
 *       {
 *         wrap: (container) => {
 *           // create wrap container
 *         }
 *       }
 *     ))
 *   }
 * }
 *
 * @example С сохранением промежуточных компонентов
 *
 * class Button extends Composite {
 *   constructor(text) {
 *     // Нельзя использовать this до вызова super
 *     const component = new MyComponent(text)
 *     super(component)
 *     component.someAction()
 *     this.component = component
 *   }
 * }
 */
export class Composite implements Component {
  constructor(component: Component)
  mount(container: Container): void
  unmount(): void
}
