import { Component, Container } from '../../../../component'

type SubmitOptions = {
  email: string
}

export interface RecoverPasswordOptions {
  onSubmit: (submitOptions: SubmitOptions)=>void
}

export class RecoverPasswordForm implements Component {
  constructor (options?: RecoverPasswordOptions)
  mount (container: Container): void
  unmount (): void
}
