import { Component, Container } from '../../../../component'

export class LoadingForm implements Component {
  constructor ()

  set progress (value: number)
  get progress (): number
  mount (container: Container): void
  unmount (): void
}
