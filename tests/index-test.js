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

//
//
// describe('LoadingButton', () => {
//   it('renders a button with type="button"', () => {
//     expect(render(<LoadingButton>Test</LoadingButton>))
//       .toContain('<button type="button">Test</button>')
//   })
//   it('disables the button when loading=true', () => {
//     expect(render(<LoadingButton loading>Test</LoadingButton>))
//       .toContain('<button disabled="" type="button">Test</button>')
//   })
//   it('disables the button when loading=true even if disabled=false', () => {
//     expect(render(<LoadingButton disabled={false} loading>Test</LoadingButton>))
//       .toContain('<button disabled="" type="button">Test</button>')
//   })
//   it('passes other props through', () => {
//     expect(render(<LoadingButton className="test">Test</LoadingButton>))
//       .toContain('<button type="button" class="test">Test</button>')
//   })
