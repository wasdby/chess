# Структура компонента

```
Component
  index.d.ts - типы и документация на копонент
  index.* - файлы необходимые для запуска/сборки компонента
  test.html - страница с визуальным тестом компонента
  test.* - все необходимые ресурсы для теста включая код теста
```

# Именование CSS классов жестко связанных с компонентом

```
<category>-<component>-<name>
<category>-<page>-<component>-<name>
```

- `<category>` - `atoms`, `common` или `pages`
- `<page>` - имя страницы к которой относится компонент (в нижнем регистре)
- `<component>` - имя компонента к которому относится стиль (в нижнем регистре)
- `<name>` - произвольное имя стиля (в нижнем регистре)

# Подключение скриптов в HTML тестах

```
<script type="module" src="./Dep1.js"></script>
<script type="module" src="./Dep2.js"></script>
<script type="module" src="./Dep3.js"></script>
<script type="module" src="./index.js"></script>
<script type="module" src="./test.js"></script>
```

Порядок подключения зависимостей должен совпадать с порядком импорта их в `index.js`

# Другие требования

- используйте `undefined` вместо `null`
- избегайте `undefined` кроме объектов `options`
- используйте `const` вместо `let` и `var`
- используйте `map` `reduce` `filter` вместо `for`

# Рекомендации и примечания

- в качестве референса компонента берите atoms/Raw,Stylable,Text и common/ShowHide
- в atoms/Stylable есть пример CSS для теста
- в atoms/Stylable есть пример подключения других компонентов в тесте
- в common/ShowHide есть пример CSS жестко связанного с копмонентом
- порядок подключения CSS значения не имеет

# References

- [Макет в Figma](https://www.figma.com/design/gPLB0SIAEPWg8gx6wHU4QP/%D0%9D%D0%B5%D1%88%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B?node-id=2145-1068&t=BirOLprSxjbJkFpw-1)
