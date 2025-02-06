import { Component, Container } from '../../../../component'

type SubmitOptions = {
  password: string,
  repeatedPassword: string
}

export interface NewPasswordOptions {
  onCancel: ()=>void,
  onSubmit: (submitOptions: SubmitOptions)=>void,
}

export class NewPasswordForm implements Component {
  constructor (options?: NewPasswordOptions)

  mount (container: Container): void
  unmount (): void
}
