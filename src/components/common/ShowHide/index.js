import { Stylable } from '../../atoms/Stylable/index.js'

export class ShowHide {
  constructor (content) { this.content = new Stylable(content) }
  mount (container) { this.content.mount(container) }
  unmount () { this.content.unmount() }
  show () { this.content.classList.remove('common-showhide-invisible') }
  hide () { this.content.classList.add('common-showhide-invisible') }
}
