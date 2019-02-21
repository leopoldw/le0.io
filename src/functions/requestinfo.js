import geolocationAPI from 'ip-geolocation-api-javascript-sdk'
import GeolocationParams from 'ip-geolocation-api-javascript-sdk/GeolocationParams.js'

// https://app.ipgeolocation.io/
const geolocation = geolocationAPI(process.env.GEOLOCATION_TOKEN, false)

const handler = ({ headers }, context, callback) => {
  const ip = headers[`client-ip`] || headers[`x-bb-ip`] || headers[`x-forwarded-for`]
  const language = headers[`x-language`]

  if (!ip)
    callback(`no IP found`)

  const params = new GeolocationParams()
  params.setIPAddress(ip)

  geolocation.getGeolocation((geo) => {
    callback(null, {
      status: 200,
      body: { ip, language, geo },
    })
  }, params)
}

export { handler }