import { Component, Container } from "../../../../component";

export interface RecoveryCodeOptions {
  email: string,
  timeout: number,
  onTimeout: ()=>void,
  onCodeInput: ()=>void,
  onCancel: ()=>void,
  onSubmit: ()=>void,
}

export class RecoveryCodeForm implements Component {
  constructor(options?: RecoveryCodeOptions);

  mount(container: Container): void;
  unmount(): void;
}