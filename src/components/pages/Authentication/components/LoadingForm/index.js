import { Composite } from '../../../../common/Composite/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { SplashScreen } from '../../../../pages/Authentication/components/SplashScreen/index.js'
import { Slider } from '../../../../pages/Authentication/components/Slider/index.js'
import { Label } from '../../../../pages/Authentication/components/Label/index.js'

export class LoadingForm extends Composite {
  constructor () {
    const slider = new Slider()
    super(new Wrap(
      new List(
        new SplashScreen(),
        new Label('Загрузка...'),
        slider
      ), {
        wrap: (container) => {
          const newContainer = document.createElement('div')
          newContainer.className = 'pages-loading-form'
          container.appendChild(newContainer)
          return newContainer
        }
      }
    ))

    this._progress = 0
    this._slider = slider
  }

  set progress (value) {
    this._progress = value
    this._slider.progress = this._progress
  }

  get progress () {
    return this._progress
  }
}
