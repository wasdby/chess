import { Component, Container } from "../../../../component";

export class Timer implements Component {
  constructor(
    timeout: number,
    options: {
      onTimeout: () => void
    }
  )

  mount(container: Container): void;
  unmount(): void;
}