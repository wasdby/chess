import { Component, Container } from "../../../../component";

export interface LoadingOptions {
  progress: number
}

export class LoadingForm implements Component {
  constructor(options: LoadingOptions);

  mount(container: Container): void;
  unmount(): void;
}