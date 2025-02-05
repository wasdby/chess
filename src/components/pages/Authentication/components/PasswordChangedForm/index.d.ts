import { Component, Container } from "../../../../component";

export interface PasswordChangedOptions {
  onLogin: ()=>void
}

export class PasswordChangedForm implements Component {
  constructor(options: PasswordChangedOptions);

  mount(container: Container): void;
  unmount(): void;
}
