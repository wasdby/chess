import { Raw } from '../../../../atoms/Raw/index.js'

export class TimerIcon {
  constructor () {
    this.element = new Raw(`<div class="pages-timer-icon"><svg width="26" height="26" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.2581 8H14.4517V18H21.6775V16H16.2581V8Z" fill="black" fill-opacity="0.2"/>
    <path d="M16 0C10 0 4.8 3.1 2.2 7.94375L0 5.8125V13.5625H8L5 10.6562C7 6.78125 11.2 3.875 16 3.875C22.6 3.875 28 9.10625 28 15.5C28 21.8937 22.6 27.125 16 27.125C12.4 27.125 9.2 25.575 7 23.0562L4 25.575C6.8 28.8687 11.2 31 16 31C24.8 31 32 24.025 32 15.5C32 6.975 24.8 0 16 0Z" fill="black" fill-opacity="0.2"/>
    </svg></div>`)
  }

  mount (container) {
    this.element.mount(container)
  }

  unmount () {
    this.element.unmount()
  }
}
