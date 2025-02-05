import { Component, Container } from '../../component'

/**
 * Компонент для заворачивания контента в произвольный контейнер
 *
 * @example
 * new Wrap(
 *   new MyComponent(),
 *   {
 *     wrap: container => {
 *       const newContainer = document.createElement('div')
 *       newContainer.classList.add('my-super-style', 'typically-paragraph')
 *       container.append(newContainer)
 *       return newContainer
 *     }
 *   }
 * )
 */
export class Wrap implements Component {
  constructor (
    content: Component,
    options: {
      wrap: (container: Container) => Container
    }
  )
  mount (container: Container): void
  unmount (): void
}
