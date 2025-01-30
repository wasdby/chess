import { Hoverable } from '../../../../atoms/Hoverable/index.js'
import { Raw } from '../../../../atoms/Raw/index.js'
import { ShowHide } from '../../../../common/ShowHide/index.js'
import { Label } from '../Label/index.js'
export class Tip {
  constructor (text) {
    this.text = text
    //this.element = new Raw(`<div class="pages-tip"></div>`)
    this.element = document.createElement('div')
    this.element.className = 'pages-tip'


    //this.textWrapper = new Raw('<div class="pages-tip-text-wrapper"></div>')

    this.tipText = new Label(this.text)
    this.tipText = new ShowHide(new Wrap)

    this.content = new Hoverable(new Raw(
      `<svg width="30" height="30" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="17.0158" cy="17" rx="17.0158" ry="17" fill="url(#paint0_linear_2255_31145)" fill-opacity="0.2"/>
      <path d="M32.2754 17C32.2754 25.4184 25.4443 32.2444 17.0159 32.2444C8.58739 32.2444 1.75635 25.4184 1.75635 17C1.75635 8.58157 8.58739 1.75552 17.0159 1.75552C25.4443 1.75552 32.2754 8.58157 32.2754 17Z" stroke="#BFBFAB" stroke-width="2"/>
      <path d="M17.0154 31.6C25.0849 31.6 31.6281 25.0642 31.6281 17C31.6281 8.93576 25.0849 2.39999 17.0154 2.39999C8.946 2.39999 2.40283 8.93576 2.40283 17C2.40283 25.0642 8.946 31.6 17.0154 31.6Z" stroke="#757980" stroke-width="2"/>
      <path d="M17.1118 15.4567V23.7331M17.1118 10.2002V10.312H17V10.2002H17.1118Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_2255_31145" x1="17.0158" y1="0" x2="17.0158" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2E2D33"/>
      <stop offset="1" stop-color="#171719"/>
      </linearGradient>
      </defs>
      </svg>`
    ), {
      onEnter: () => {
        this.element.style.backgroundColor = '#ffffff'
        this.textWrapper.mount(this.element)
        const textWrapperDiv = document.getElementsByClassName('pages-tip-text-wrapper')[0]
        this.tipText.mount(textWrapperDiv)
      },
      onLeave: () => {
        this.element.style.backgroundColor = 'transparent'
        this.textWrapper.unmount()
      }
    })
  }

  mount (container) {
    container.appendChild(this.element)
    this.content.mount(this.element)
  }

  unmount () {
    this.content.unmount()
    this.tipText.unmount()
    this.textWrapper.unmount()
    this.element.parentElement.removeChild(this.element)
  }
}
