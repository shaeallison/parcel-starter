import * as sharedStyles from '../../shared.module.scss'
import { SpellDataType, spells } from './spells'
import * as styles from './spellFinder.module.scss'
import { useState } from 'react'

// Prompt:
// Create a data table with the spells from the harry potter video game, a column for each data point
// Create input filters to allow for searching by name, max damage and min cooldown
// the table rows should render dynamically based on the filter settings
// The rows highest and lowest damage spells should be colored red and blue, respectively

export function narrowSpells(
  spells: SpellDataType[],
  name: string | null,
  maxDamage: number | null,
  minCoolDown: number | null
): SpellDataType[] {
  const narrowedSpells = spells.filter((spell) => {
    const nameIsIncluded =
      (name && spell.name.toLowerCase().includes(name.toLowerCase())) ||
      name === null
    const isGreaterThanEqualMaxDamage =
      (maxDamage && maxDamage <= spell.damage) || maxDamage === null
    const isLessThanEqualMinCoolDown =
      (minCoolDown && minCoolDown >= spell.coolDown) || minCoolDown === null

    return (
      nameIsIncluded &&
      isGreaterThanEqualMaxDamage &&
      isLessThanEqualMinCoolDown
    )
  })

  return narrowedSpells
}

export default function SpellFinderTest(): JSX.Element {
  const [name, setName] = useState<string | null>(null)
  const [maxDamage, setMaxDamage] = useState<number | null>(null)
  const [minCoolDown, setMinCoolDown] = useState<number | null>(null)

  const narrowedSpells = narrowSpells(spells, name, maxDamage, minCoolDown)

  let highestDamage = spells[0].damage
  narrowedSpells.forEach((spell) => {
    if (spell.damage > highestDamage) {
      highestDamage = spell.damage
    }
  })

  return (
    <div className={sharedStyles.container}>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            type='text'
            onChange={(e) => {
              if (e.target.value === '') {
                setName(null)
              } else {
                setName(e.target.value)
              }
            }}
          />
        </div>
        <div>
          <label htmlFor='damage'>Max Damage</label>
          <input
            id='damage'
            name='damage'
            type='number'
            onChange={(e) => {
              if (e.target.value === '') {
                setMaxDamage(null)
              } else {
                setMaxDamage(Number(e.target.value))
              }
            }}
          />
        </div>
        <div>
          <label htmlFor='cool-down'>Min Cool Down</label>
          <input
            id='cool-down'
            name='cool-down'
            type='number'
            onChange={(e) => {
              if (e.target.value === '') {
                setMinCoolDown(null)
              } else {
                setMinCoolDown(Number(e.target.value))
              }
            }}
          />
        </div>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Damage</th>
            <th>Cool Down</th>
            <th>Duration</th>
            <th>Range</th>
            <th>Speed Up</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO make row component */}
          {narrowedSpells.map((spell) => {
            return (
              <tr
                key={spell.name}
                style={
                  highestDamage === spell.damage
                    ? { backgroundColor: 'red' }
                    : {}
                }
              >
                <td>{spell.name}</td>
                <td>{spell.damage}</td>
                <td>{spell.coolDown}</td>
                <td>{spell.duration}</td>
                <td>{spell.range}</td>
                <td>{spell.speedUp}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
