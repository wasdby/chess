import { Component, Container } from '../../../../component'

export interface TgLinkOptions {
  link: string
}

export class TelegramLink implements Component {
  constructor (tgLinkOptions: TgLinkOptions)

  mount (container: Container): void
  unmount (): void
}
