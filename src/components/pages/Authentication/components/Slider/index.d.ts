import { Component, Container } from '../../../../component'

export class Slider implements Component {
  constructor ()

  mount (container: Container): void
  unmount (): void

  set progress (value: number)
  get percent (): number
}
