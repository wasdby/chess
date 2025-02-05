import { Component, Container } from '../../component'

/**
 * Обертка для сырого HTML
 */
export class Raw implements Component {
  constructor (html: string)
  mount (container: Container): void
  unmount (): void
}
