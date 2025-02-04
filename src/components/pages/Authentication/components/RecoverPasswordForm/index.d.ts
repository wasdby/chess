import { Component, Container } from "../../../../component";

export interface RecoverPasswordOptions {
  onEmailInput: ()=>void,
  onSendButtonClick: ()=>void
}

export class RecoverPasswordForm implements Component {
  constructor(options?: RecoverPasswordOptions);
  mount(container: Container): void;
  unmount(): void;
}