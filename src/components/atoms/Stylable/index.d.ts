import { Component, Container } from '../../component'

/**
 * Компонент для динамического изменения CSS классов на элементе
 *
 * @example
 * const stylable = new Stylable(new MyDynamicText())
 * stylable.classList.add('style1', 'style2')
 * stylable.classList.remove('style2')
 */
export class Stylable implements Component {
  constructor (content: Component)
  mount (container: Container): void
  unmount (): void
  get classList (): HTMLElement['classList']
}
