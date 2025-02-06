import { Component, Container } from '../../../../component'

type SubmitOptions = {
  code: string
}

export interface RecoveryCodeOptions {
  email: string,
  timeout: number,
  onTimeout: ()=>void,
  onCancel: ()=>void,
  onSubmit: (submitOptions: SubmitOptions)=>void,
}

export class RecoveryCodeForm implements Component {
  constructor (options?: RecoveryCodeOptions)

  mount (container: Container): void
  unmount (): void
}
