import { Raw } from '../../../../atoms/Raw/index.js'
import { Clickable } from '../../../../atoms/Clickable/index.js'
export class HideButton {
  constructor (onClick) {
    this.element = document.createElement('div')
    this.element.className = 'pages-hide-button'
    this.showState = true
    this.onClick = onClick
  }

  get show () {
    return this.showState
  }

  set show (value) {
    this.showState = value
    this.element.classList.toggle('active', this.showState)
  }

  mount (container) {
    const content = new Clickable(new Raw(`<svg class="pages-hide-button-svg" width="30" height="30" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.9794 0L33.4037 2.41667L6.73569 29L4.31133 26.5833L30.9794 0Z" fill="white"/>
    <path d="M24.5007 4.04171C16.5892 0.285516 8.45917 3.49345 0 14.5001C2.2798 17.4665 4.5357 19.8664 6.76985 21.7162L11.0291 17.4704C10.6341 16.5504 10.4163 15.5436 10.4163 14.5001C10.4163 10.2601 13.8884 6.94223 17.9085 6.94223C18.9933 6.94223 20.0173 7.17557 20.9395 7.59153L24.5007 4.04171Z" fill="white"/>
    <path d="M17.8872 10.6342C15.8872 10.7397 14.3878 12.3847 14.2624 14.2474L17.8872 10.6342Z" fill="white"/>
    <path d="M12.776 25.3958C20.7432 28.5467 28.4501 24.655 36 14.5001C34.0867 11.9266 32.1633 9.7554 30.2281 7.99909L25.2424 12.969C25.3462 13.466 25.4006 13.9785 25.4006 14.5001C25.4006 18.7401 21.9285 22.058 17.9085 22.058C17.3548 22.058 16.817 21.9972 16.3006 21.8824L12.776 25.3958Z" fill="white"/>
    <path d="M21.8835 13.9006L17.4542 18.3158L21.8835 13.9006Z" fill="white"/>
    <path d="M24.6223 11.1704L28.9254 6.88103L24.6223 11.1704Z" fill="white"/>
    <path d="M11.1126 24.6373L14.523 21.2374L11.1126 24.6373Z" fill="white"/>
    </svg>`),
    {
      onClick: () => this.onClick()
    })

    content.mount(this.element)
    container.appendChild(this.element)
    this.show = true
  }

  unmount () {
    this.element.parentElement.removeChild(this.element)
  }
}
