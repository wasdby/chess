import { Component, Container } from '../../component'

/**
 * Показывает или скрывает содержимое используя CSS
 *
 * @example
 * const helpBlock = new ShowHide(new Help())
 * helpBlock.show() // on hover on help button
 * helpBlock.hide() // otherwise
 */
export class ShowHide implements Component {
  constructor (content: Component)
  mount (container: Container): void
  unmount (): void
  show (): void
  hide (): void
}
