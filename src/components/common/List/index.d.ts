import { Component, Container } from "../../component"

/**
 * Наполняет один и тот же контейнер списком компонентов по порядку
 * Удаление компонентов происходит в обратном порядке
 *
 * @example
 * new List(
 *   new AttentionText('АКЦИЯ!'),
 *   new Text('Сегодня и только'),
 *   new AttentionText('СЕЙЧАС'),
 *   new Text('чебуреки 1+1 в'),
 *   new AttentionText('ПОДАРОК')
 * )
 */
export class List implements Component {
  constructor(...components: Component[])
  mount(container: Container): void;
  unmount(): void;
}
