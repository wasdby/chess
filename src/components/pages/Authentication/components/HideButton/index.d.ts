import { Component, Container } from "../../../../component";
import { Input } from "../Input/index.js";

export class HideButton implements Component{
  constructor(
    onClick: () => void
  );
  mount(container: Container): void;
  unmount(): void;

  get show() : boolean;
  set show(value: boolean);
}