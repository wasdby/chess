import { Component, Container } from '../../component'

/**
 * Компонент для отслеживания курсора мыши на элементе
 *
 * @example
 * new Hoverable(
 *   new MyHelpText(),
 *   {
 *     onEnter: myHelpText => myHelpText.show(),
 *     onLeave: myHelpText => myHelpText.hide()
 *   }
 * )
 */
export class Hoverable<T extends Component> implements Component {
  constructor (
    content: T,
    options: {
      onEnter?: (content: T) => void
      onLeave?: (content: T) => void
    }
  )
  mount (container: Container): void
  unmount (): void
}
