export class Timer {
  constructor(timeout, options) {
    this.timeout = timeout
    this.onTimeout = options.onTimeout

    this.element = document.createElement('p')
    this.element.className = 'pages-timer'
  }

  mount(container) {
    container.appendChild(this.element)

    const renderTime = (time) => {
      const minutes = Math.floor(time / 60)
      const seconds = time - (minutes * 60)
      return `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`
    }

    const daemon = async () => {
      const controller = new AbortController()
      this.abortDaemon = () => controller.abort()
      for (const time of [...Array(this.timeout).keys()].map(x => x + 1).reverse()) {
        if (controller.signal.aborted) return
        this.element.innerHTML = renderTime(time)
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      this.element.innerHTML = renderTime(0)
      this.onTimeout()
    }
    daemon()
  }

  unmount() {
    this.abortDaemon?.()
    this.element.parentElement.removeChild(this.element)
  }
}
