import { Component, Container } from '../../../../component'

export class Tip implements Component {
  constructor (
    text: string
  )

  mount (container: Container): void
  unmount (): void
}
