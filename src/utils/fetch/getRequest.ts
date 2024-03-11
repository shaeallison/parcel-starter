import { isEmpty } from 'lodash'

export default function fetchRequest(url: string, auth?: string): any {
  fetch(url, {
    method: 'GET',
    headers: {
      // Authorization:
    }
  })
    .then(async (res) => await res.json())
    .then((data) => {
      if (data.success === true) {
        console.log('data: ', data)
        return data
      } else {
        // catch error with upload
        console.log(data?.message ?? 'Request Error Occurred')
        if (isEmpty(data?.message)) {
          return 'Request Error Occurred'
        } else {
          return data?.message
        }
      }
    })
    .catch((err) => {
      // catch error with fetch
      console.log(err)
    })
}
