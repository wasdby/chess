import { Component, Container } from '../../../../component'

/**
 * Все текстовые напдписи, кроме заголовков
 */
export class Label implements Component {
  constructor (text: string)
  mount (container: Container): void
  unmount (): void
}
