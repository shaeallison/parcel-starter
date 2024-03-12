import getRequest from '~/src/utils/fetch/getRequest'
import * as sharedStyles from '../../shared.module.scss'
import { useEffect, useState } from 'react'
import * as styles from './forecast.module.scss'

function TableRows({
  data,
  minValue,
  maxValue
}: {
  data: any
  minValue: string
  maxValue: string
}): JSX.Element {
  const daily = data.daily
  const date: string[] = daily.time
  const max: number[] = daily.temperature_2m_max
  const min: number[] = daily.temperature_2m_min

  const combinedData = date
    .map((date: string, i: number) => {
      return [date, min[i], max[i]]
    })
    .filter((_, i) => max[i] < Number(maxValue) && min[i] > Number(minValue))

  console.log(combinedData)

  return (
    <>
      {combinedData.map((data, i) => {
        return (
          <tr key={`row-${i}`}>
            <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
          </tr>
        )
      })}
    </>
  )
}

function Filters({
  onChange
}: {
  onChange: (value: string, type: 'min' | 'max') => void
}): JSX.Element {
  return (
    <form>
      <div>
        <label htmlFor='min'>Min Temp</label>
        <input
          id='min'
          name='min'
          type='number'
          min='0'
          max='100'
          onChange={(e) => onChange(e.target.value, 'min')}
        />
      </div>
      <div>
        <label htmlFor='max'>Max Temp</label>
        <input
          id='min'
          name='max'
          type='number'
          max='100'
          min='0'
          onChange={(e) => onChange(e.target.value, 'max')}
        />
      </div>
    </form>
  )
}

function Forecast() {
  const [forecastData, setForecastData] = useState<any>(null)
  const [minValue, setMinValue] = useState<string>('0')
  const [maxValue, setMaxValue] = useState<string>('100')

  async function fetchForecast(
    queryUrl: string,
    params: Record<string, any>
  ): Promise<void> {
    const response = await getRequest(queryUrl, params)

    setForecastData(response)
  }

  function handleInputChange(value: string, type: 'min' | 'max') {
    if (type === 'min') {
      if (value !== '') {
        setMinValue(value)
      } else {
        setMinValue('0')
      }
    } else if (type === 'max') {
      if (value !== '') {
        setMaxValue(value)
      } else {
        setMaxValue('100')
      }
    }
  }

  function handleGetForecast(): void {
    const params = {
      latitude: 42.3584,
      longitude: -71.0598,
      daily: ['temperature_2m_max', 'temperature_2m_min'],
      temperature_unit: 'fahrenheit',
      wind_speed_unit: 'mph',
      timezone: 'America/New_York',
      past_days: 7
    }

    void fetchForecast('https://api.open-meteo.com/v1/forecast', params)
  }

  useEffect(() => {
    console.log('effect')
    handleGetForecast()
  }, [])

  return (
    <div className={sharedStyles.container}>
      <h1>Forecast</h1>
      <Filters onChange={handleInputChange} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Min Temp</th>
            <th>Max Temp</th>
          </tr>
        </thead>
        <tbody>
          {forecastData && (
            <TableRows
              data={forecastData}
              minValue={minValue}
              maxValue={maxValue}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Forecast
