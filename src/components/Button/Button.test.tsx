/**
 * @jest-environment jsdom
 */

import { act, create } from 'react-test-renderer'
import { render } from '@testing-library/react'
import { Button } from './Button'

it('click button, see message change', () => {
  const component = <Button id='test-id'>Click Me!</Button>
  let tree = create(component)
  const { getByText } = render(component)

  expect(tree).toMatchSnapshot()

  // Initial message
  expect(getByText('Try Clicking..'))

  // manually trigger click
  act(() => {
    getByText('Click Me!').click()
  })

  // Second message
  expect(getByText('Thanks for Clicking!'))
})
