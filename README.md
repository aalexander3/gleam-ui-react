# gleam-ui-react

[![npm package][npm-badge]][npm]

Lightweight UI kit that will make your app sparkle!

## Installation
---
 `npm i gleam-ui-react`

## Usage
---

### Button

| Prop Name      | Prop Type (Default)     | Options                       |
| :------------- | :---------------------- | :---------------------------- |
| handleClick    | function (null)         | any callback                  |
| label          | string (null)           | any label                     |
| color          | string (default)        | default / primary / secondary |
| size           | string (medium)         | small / medium / large        |

examples:
```js
  import { Button } from 'gleam-ui-react'

  const SomeComponent = () => {
    const handleClick = () => {
      // action here
    }

    return (
      <Button handleClick={handleClick} label='Click Me' color='default' size='medium' />
    )
  }
```


[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/gleam-ui-react
