import { Component, Container } from '../../component'

/**
 * Олицетворение паттерна NullObject
 */
export class Nothing implements Component {
  mount (container: Container): void
  unmount (): void
}
