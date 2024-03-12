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
  expect(narrowSpells(testSpells, null, null, null)).toEqual(testSpells)
})

it('should narrow to single result with high specificity substring', () => {
  expect(narrowSpells(testSpells, 'Bombarda', null, null)).toEqual([
    testSpells[1]
  ])
})

it('should narrow to multiple results with low specificity substring', () => {
  expect(narrowSpells(testSpells, 'a', null, null)).toEqual([
    testSpells[0],
    testSpells[1]
  ])
})

it('should return no spells when no names match', () => {
  expect(narrowSpells(testSpells, 'test', null, null)).toEqual([])
})

it('should return spells with damage greater than or equal to 10', () => {
  expect(narrowSpells(testSpells, null, '10', null)).toEqual([
    testSpells[1],
    testSpells[3]
  ])
})

it('should return spells with letter "c" AND coolDown less than or equal to 10', () => {
  expect(narrowSpells(testSpells, 'c', null, '10')).toEqual([
    testSpells[0],
    testSpells[3]
  ])
})

it('should return spells with damage greater than "20" and coolDown less than or equal to "15', () => {
  expect(narrowSpells(testSpells, null, '20', '15')).toEqual([testSpells[1]])
})

it('should return spells containing substring "bom" damage greater than "20" and coolDown less than or equal to "15', () => {
  expect(narrowSpells(testSpells, null, '20', '15')).toEqual([testSpells[1]])
})
