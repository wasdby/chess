import { Clickable } from "./src/components/atoms/Clickable/index.js"
import { Hoverable } from "./src/components/atoms/Hoverable/index.js"
import { Stylable } from "./src/components/atoms/Stylable/index.js"
import { Wrap } from "./src/components/atoms/Wrap/index.js"
import { Text } from "./src/components/atoms/Text/index.js"

const component = new Clickable(
  new Hoverable(
    new Stylable(
      new Wrap(
        new Text('Hello World!'),
        {
          wrap: container => {
            // На проекте есть jQuery, но не думаю, что его стоит использовать,
            // потому что есть нативные способы сделать почти тоже самое
            const newContainer = document.createElement('div')
            newContainer.classList.add('my-super-style', 'typically-paragraph')
            container.append(newContainer)
            return newContainer
          }
        }
      )
    ),
    {
      onEnter: x => x.classList.toggle('red', true),
      onLeave: x => x.classList.toggle('red', false)
    }
  ),
  { onClick: () => console.log('Click!') }
)

component.mount(document.querySelector('#root')!!)
