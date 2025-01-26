import { Stylable } from "../../atoms/Stylable/index.js"

export class ShowHide {
  constructor(content) { this.content = new Stylable(content) }
  mount(container) { this.content.mount(container) }
  unmount() { this.content.unmount() }
  show() { this.content.classList.add('common_ShowHide_invisible') }
  hide() { this.content.classList.remove('common_ShowHide_invisible') }
}
