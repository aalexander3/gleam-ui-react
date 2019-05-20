import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import Button from 'src/Button'

describe('Button', () => {
  it('renders a button', () => {
    expect(render(<Button handleClick={() => {}} label="test"/>))
      .toContain('<button>test</button>')
  })
})
