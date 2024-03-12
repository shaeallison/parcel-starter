export default async function getRequest(
  url: string,
  params?: any
): Promise<any> {
  let urlParams
  let urlString = url

  if (params) {
    urlParams = new URLSearchParams(params)
    urlString = `${urlString}?${urlParams.toString()}`
  }

  try {
    const response = await fetch(urlString, {
      method: 'GET',
      headers: {
        // Authorization:
      }
    })
    return await response.json()
  } catch (err) {
    // catch error with fetch
    // console.log(err)
    throw err
  }
}
