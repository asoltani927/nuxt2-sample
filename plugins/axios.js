
export default function ({ $axios, redirect, app, $auth }, inject) {
  $axios.onRequest((config) => {
    return config
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      case 403:

        break
      case 404:

        break
    }
  })

  inject('axios', $axios)
}
