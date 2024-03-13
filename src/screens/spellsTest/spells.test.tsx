/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { SpellDataType } from './spells'

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

it('should return ....', () => {
  // expect().toEqual()
})
