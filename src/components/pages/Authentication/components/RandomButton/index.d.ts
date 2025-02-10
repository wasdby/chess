import { Component, Container } from '../../../../component'

export class RandomButton implements Component {
  constructor (
    onClick: () => void
  )
  mount (container: Container): void
  unmount (): void
}
