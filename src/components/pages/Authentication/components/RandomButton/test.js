import { RandomButton } from './index.js'

const root = document.getElementById('root')
const inputField = document.querySelector('input')

new RandomButton(handleButtonClick).mount(root)

const namesPole = [
  'Капитан Очевидность',
  'Супер Пупер',
  'Мистер Непредсказуемость',
  'Граф Монте-Картошкин',
  'Доктор Ватсончик',
  'Профессор Хаос',
  'Сэр Ложка',
  'Лорд Бублик',
  'Мадам Пельмешка',
  'Барон Вафелька'
]

function handleButtonClick () {
  const nameIdx = Math.floor(Math.random() * namesPole.length)
  inputField.value = namesPole[nameIdx]
}
