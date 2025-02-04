import { Composite } from '../../../../common/Composite/index.js'
import { Wrap } from '../../../../atoms/Wrap/index.js'
import { List } from '../../../../common/List/index.js'
import { SplashScreen } from '../../../../pages/Authentication/components/SplashScreen/index.js'
import { Slider } from '../../../../pages/Authentication/components/Slider/index.js'
import { Label } from '../../../../pages/Authentication/components/Label/index.js'

export class LoadingForm extends Composite {
  constructor (options) {
    const slider = new Slider()
    slider.progress = options.progress

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
  }
}
