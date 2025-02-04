import { Component, Container } from "../../../../component";

export interface NewPasswordOptions {
  onPasswordInput: ()=>void,
  onPasswordRepeat: ()=>void,
  onCancel: ()=>void,
  onSubmit: ()=>void,
}

export class NewPasswordForm implements Component {
  constructor(options?: NewPasswordOptions);

  mount(container: Container): void;
  unmount(): void;
}