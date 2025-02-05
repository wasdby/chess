import { Component, Container } from '../../component'

/**
 * Компонент для отображения текста
 *
 * @example
 * new Text('Hello World!')
 */
export class Text implements Component {
  constructor (text: string)
  mount (container: Container): void
  unmount (): void
}
