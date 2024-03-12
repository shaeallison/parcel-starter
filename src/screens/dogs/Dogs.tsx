import { useEffect, useState } from 'react'
import * as sharedStyles from '../../shared.module.scss'
import getRequest from '../../utils/fetch/getRequest'
import * as styles from './dogs.module.scss'
import { debounce } from 'lodash'

export function isValidUrl(urlString: string): boolean {
  var urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // validate fragment locator
  return !!urlPattern.test(urlString)
}

export default function Dogs(): JSX.Element {
  const [dogData, setDogData] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function fetchRandomDogData(queryUrl: string): Promise<void> {
    const response = await getRequest(queryUrl)
    const { status, message } = response

    if (status === 'success') {
      if (isValidUrl(message)) {
        setDogData(message)
        setErrorMsg(null)
      } else {
        setDogData(null)
        setErrorMsg('Response is not a valid image source.')
      }
    } else {
      setErrorMsg(message)
    }
  }

  function handleGetRandomDog(): void {
    void fetchRandomDogData('https://dog.ceo/api/breeds/image/random')
  }

  useEffect(() => {
    console.log('effect')
    handleGetRandomDog()
  }, [])

  return (
    <div className={sharedStyles.container}>
      <button
        onClick={() => {
          const debouncedFetch = debounce(handleGetRandomDog, 200)
          return debouncedFetch()
        }}
      >
        Shuffle Dog!
      </button>
      <br />
      {errorMsg && <div>{errorMsg}</div>}
      {dogData && (
        <img className={styles.image} src={dogData} alt='random dog image' />
      )}
    </div>
  )
}
