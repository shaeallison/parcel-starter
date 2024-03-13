import { SpellDataType, spells } from './spells'
import * as sharedStyles from '../../shared.module.scss'
import * as styles from './spellFinder.module.scss'
import { useState } from 'react'

export function narrowSpells(
  allSpellData: SpellDataType[],
  name: string | null
): SpellDataType[] {
  return allSpellData.filter((spell) => {
    const includesName =
      (name?.toLowerCase() &&
        spell.name.toLowerCase().includes(name.toLowerCase())) ||
      name === null

    return includesName
  })
}

function TableFilters({
  setName
}: {
  setName: (value: string | null) => void
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
    </form>
  )
}

function TableRow({ rowData }: { rowData: SpellDataType }): JSX.Element {
  return (
    <tr>
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

  const narrowedSpells = narrowSpells(allSpellData, name)

  return (
    <>
      <TableFilters setName={setName} />
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
            return <TableRow rowData={spell} key={spell.name} />
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
