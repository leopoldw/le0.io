// import GeolocationAPI from 'ip-geolocation-api-javascript-sdk'
// import GeolocationParams from 'ip-geolocation-api-javascript-sdk/GeolocationParams.js'

const GeolocationAPI = require(`ip-geolocation-api-javascript-sdk`)
const GeolocationParams = require(`ip-geolocation-api-javascript-sdk/GeolocationParams.js`)

// https://app.ipgeolocation.io/
const geolocation = new GeolocationAPI(process.env.GEOLOCATION_TOKEN, false)

exports.handler = ({ headers }, context, callback) => {
  const ip = headers[`client-ip`] || headers[`x-bb-ip`] || headers[`x-forwarded-for`]
  const language = headers[`x-language`]

  if (!ip)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        ip,
        language,
      }),
    })

  const params = new GeolocationParams()
  params.setIPAddress(ip)

  geolocation.getGeolocation((geo) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ ip, language, geo }),
    })
  }, params)
}