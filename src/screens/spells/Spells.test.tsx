/**
 * @jest-environment jsdom
 */

import SpellFinder, { narrowSpells } from './SpellFinder'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SpellDataType } from './spells'

it('should show return spells that match filter criteria', () => {
  render(<SpellFinder />)
  expect(screen.getByText('Accio')).toBeInTheDocument()
  expect(screen.getByText('Crucio')).toBeInTheDocument()

  const nameInput = screen.getByLabelText('Search By Name')
  fireEvent.change(nameInput, { target: { value: 'a' } })

  expect(screen.getByText('Alohomora')).toBeInTheDocument()
  expect(screen.queryByText('Crucio')).toBeNull()
})

const testSpells: SpellDataType[] = [
  {
    name: 'Accio',
    damage: 0,
    coolDown: 8,
    duration: 2,
    range: 3000,
    speedUp: 24
  },
  {
    name: 'Bombarda',
    damage: 35,
    coolDown: 15,
    duration: 0,
    range: 3000,
    speedUp: 45
  },
  {
    name: 'Crucio',
    damage: 4,
    coolDown: 20,
    duration: 20,
    range: 3000,
    speedUp: 60
  },
  {
    name: 'Descendo',
    damage: 11,
    coolDown: 10,
    duration: 2,
    range: 3000,
    speedUp: 30
  }
]

it('should return all spells if there are no applied filters', () => {
  expect(narrowSpells(testSpells, null)).toEqual(testSpells)
})

it('should narrow to single result with high specificity substring', () => {
  expect(narrowSpells(testSpells, 'Bombarda')).toEqual([testSpells[1]])
})

it('should narrow to multiple results with low specificity substring', () => {
  expect(narrowSpells(testSpells, 'a')).toEqual([testSpells[0], testSpells[1]])
})

it('should return no spells when no names match', () => {
  expect(narrowSpells(testSpells, 'test')).toEqual([])
})
