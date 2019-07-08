# gleam-ui-react

[![npm package][npm-badge]][npm]

Lightweight UI kit that will make your app sparkle!

## Installation
 `npm i gleam-ui-react`

## Docs
Visit the Gleam UI React [docs][docs] for information about Gleam UI components and how to use them.


## Example Usage

#### Button

#### Props
| Name           | Prop Type                            | Default       | Description                   |
| :------------- | :----------------------------        |:------------- | :---------------------------- |
| handleClick    | function                             | null          | callback for action           |
| label          | string                               | null          | text to display               |
| color          | enum - color list                    | default       |
| size           | enum - small / medium / large        | medium        | size of the button            |
| disabled       | bool                                 | false         | disables the button           |
| className      | string                               | ''            | additional classNames for the button      |
| children       | node                                 | null          | children to be rendered inside button     |
| variant        | enum -                               | null          | children to be rendered inside button     |

examples:
```js
  import React from 'react'
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
[docs]: https://github.com/aalexander3/gleam-ui-react
