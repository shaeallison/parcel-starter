/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Component from './Component'

it('should say hi', () => {
  render(<Component />)
  expect(screen.getByText('Hi Stripes!')).toBeInTheDocument()
})
