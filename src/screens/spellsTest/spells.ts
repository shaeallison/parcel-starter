type SpellNamesType =
  | 'Accio'
  | 'Alohomora'
  | 'Ancient Magic'
  | 'Ancient Magic Throw'
  | 'Arresto Momentum'
  | 'Avada Kedavra'
  | 'Basic Cast'
  | 'Basic Cast Heavy (4th hit)'
  | 'Bombarda'
  | 'Confringo'
  | 'Crucio'
  | 'Depulso'
  | 'Descendo'

export type SpellDataType = {
  name: SpellNamesType
  damage: number
  coolDown: number
  duration: number
  range: number
  speedUp: number
}

export const spells: SpellDataType[] = [
  {
    name: 'Accio',
    damage: 0,
    coolDown: 8,
    duration: 2,
    range: 3000,
    speedUp: 24
  },
  {
    name: 'Alohomora',
    damage: 0,
    coolDown: 0.5,
    duration: 0,
    range: 3000,
    speedUp: 1
  },
  {
    name: 'Ancient Magic',
    damage: 250,
    coolDown: 0,
    duration: 0,
    range: 5000,
    speedUp: 1
  },
  {
    name: 'Ancient Magic Throw',
    damage: 40,
    coolDown: 0,
    duration: 0,
    range: 3000,
    speedUp: 1
  },
  {
    name: 'Arresto Momentum',
    damage: 0,
    coolDown: 15,
    duration: 5,
    range: 3000,
    speedUp: 45
  },
  {
    name: 'Avada Kedavra',
    damage: 10000000,
    coolDown: 90,
    duration: 0,
    range: 3000,
    speedUp: 1
  },
  {
    name: 'Basic Cast',
    damage: 3,
    coolDown: 0,
    duration: 0,
    range: 3000,
    speedUp: 1
  },
  {
    name: 'Basic Cast Heavy (4th hit)',
    damage: 25,
    coolDown: 0,
    duration: 0,
    range: 3000,
    speedUp: 1
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
    name: 'Confringo',
    damage: 25,
    coolDown: 10,
    duration: 5,
    range: 3000,
    speedUp: 30
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
    name: 'Depulso',
    damage: 0,
    coolDown: 10,
    duration: 0,
    range: 3000,
    speedUp: 30
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
