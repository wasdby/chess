import { Component, Container } from "../../../../component";

type NetStab = {
  getPercent: () => number
}

export class Slider implements Component {
  constructor(
    net: NetStab
  )

  mount(container: Container): void;
  unmount(): void;
}