import { SpellDataType, spells } from './spells'
import * as sharedStyles from '../../shared.module.scss'
import * as styles from './spellFinder.module.scss'
import { useState } from 'react'

export function narrowSpells(
  allSpellData: SpellDataType[],
  name: string | null,
  damageMin: string | null,
  coolDownMax: string | null
): SpellDataType[] {
  return allSpellData.filter((spell) => {
    const includesName =
      (name?.toLowerCase() &&
        spell.name.toLowerCase().includes(name.toLowerCase())) ||
      name === null
    const greaterThanDamageMin =
      spell.damage >= Number(damageMin) || damageMin === null
    const lessThanCoolDownMax =
      spell.coolDown <= Number(coolDownMax) || coolDownMax === null

    return includesName && greaterThanDamageMin && lessThanCoolDownMax
  })
}

function TableFilters({
  setName,
  setCoolDownMax,
  setDamageMin
}: {
  setName: (value: string | null) => void
  setCoolDownMax: (value: string | null) => void
  setDamageMin: (value: string | null) => void
}): JSX.Element {
  return (
    <form className={styles.form}>
      <div className={styles['form-item']}>
        <label htmlFor='spell-name'>Search By Name</label>
        <input
          id='spell-name'
          type='text'
          placeholder='Accio'
          onChange={(e) =>
            e.target.value !== '' ? setName(e.target.value) : setName(null)
          }
        />
      </div>

      <div className={styles['form-item']}>
        <label htmlFor='damage-min'>Damage Min</label>
        <input
          id='damage-min'
          type='number'
          placeholder='30'
          onChange={(e) =>
            e.target.value !== ''
              ? setDamageMin(e.target.value)
              : setDamageMin(null)
          }
        />
      </div>

      <div className={styles['form-item']}>
        <label htmlFor='cooldown-max'>Cooldown Max</label>
        <input
          id='cooldown-max'
          type='number'
          placeholder='100'
          onChange={(e) =>
            e.target.value !== ''
              ? setCoolDownMax(e.target.value)
              : setCoolDownMax(null)
          }
        />
      </div>
    </form>
  )
}

function TableRow({
  rowData,
  color
}: {
  rowData: SpellDataType
  color: string
}): JSX.Element {
  return (
    <tr className={styles[color]}>
      <td>{rowData.name}</td>
      <td>{rowData.damage}</td>
      <td>{rowData.coolDown}</td>
      <td>{rowData.duration}</td>
      <td>{rowData.range}</td>
      <td>{rowData.speedUp}</td>
    </tr>
  )
}

function SpellTable({
  allSpellData
}: {
  allSpellData: SpellDataType[]
}): JSX.Element {
  const [name, setName] = useState<string | null>(null)
  const [damageMin, setDamageMin] = useState<string | null>(null)
  const [coolDownMax, setCoolDownMax] = useState<string | null>(null)

  const narrowedSpells = narrowSpells(
    allSpellData,
    name,
    damageMin,
    coolDownMax
  )

  // TODO: write test cases
  function getHighestLowest(
    narrowedSpells: Array<SpellDataType>
  ): Record<string, number> {
    if (narrowedSpells.length === 0) {
      return { high: -1, low: -1 }
    } else {
      let highestDamage = narrowedSpells[0].damage
      let lowestDamage = narrowedSpells[0].damage

      narrowedSpells.forEach((spell) => {
        if (spell.damage > highestDamage) {
          highestDamage = spell.damage
        }
        if (spell.damage < lowestDamage) {
          lowestDamage = spell.damage
        }
      })

      return { high: highestDamage, low: lowestDamage }
    }
  }

  const highLow = getHighestLowest(narrowedSpells)

  return (
    <>
      <TableFilters
        setName={setName}
        setDamageMin={setDamageMin}
        setCoolDownMax={setCoolDownMax}
      />
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
          {narrowedSpells.map((spell) => {
            let color = ''
            if (highLow.high === spell.damage) {
              color = 'red'
            } else if (highLow.low === spell.damage) {
              color = 'blue'
            }
            return <TableRow rowData={spell} key={spell.name} color={color} />
          })}
        </tbody>
      </table>
    </>
  )
}

export default function SpellFinder(): JSX.Element {
  return (
    <div className={sharedStyles.container}>
      <SpellTable allSpellData={spells} />
    </div>
  )
}
