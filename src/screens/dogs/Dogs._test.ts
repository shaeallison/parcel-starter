import { isValidUrl } from './Dogs'

it('returns true if url is valid', () => {
  expect(isValidUrl('www.google.com')).toBe(true)
  expect(isValidUrl('https://google.com')).toBe(true)
})

it('returns false if url is invalid', () => {
  expect(isValidUrl('./image/src.png')).toBe(false)
  expect(isValidUrl('')).toBe(false)
  expect(isValidUrl('undefined')).toBe(false)
  expect(isValidUrl('http://localhost:3000/image.jpeg')).toBe(false)
})
