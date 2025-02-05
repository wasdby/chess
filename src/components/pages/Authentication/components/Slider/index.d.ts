import { Component, Container } from '../../../../component'

export class Slider implements Component {
  constructor ()

  mount (container: Container): void
  unmount (): void

  /**
   * Доля прогресса. Дробное значение от 0 до 1
   */
  set progress (value: number)

  /**
   * Доля прогресса. Дробное значение от 0 до 1
   */
  get progress (): number
}
