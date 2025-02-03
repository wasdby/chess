import { Raw } from '../../../../atoms/Raw/index.js'

export class SplashScreen {
  constructor () {
    this.element = new Raw(`<div class="pages-splashscreen">
        <img src="./media/art.png" class="pages-splashscreen-art"/>
        <img src="./media/logo.png" class="pages-splashscreen-logo"/>
      </div>`)
  }

  mount (container) {
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
  }
}
