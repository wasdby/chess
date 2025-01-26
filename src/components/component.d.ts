export type Container = HTMLElement

export interface Component {
  /**
   * Добавление компонента из DOM со всеми подписками
   */
  mount(container: Container): void

  /**
   * Удаление компонента из DOM. Удаление всех подписок и прочих занятых ресурсов
   */
  unmount(): void
}
