const https = require(`https`)

exports.handler = ({ headers }, context, callback) => {
  const ip = headers[`client-ip`] || headers[`x-bb-ip`] || headers[`x-forwarded-for`] || `1.1.1.1`
  const language = headers[`x-language`]

  if (!ip)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        ip,
        language,
      }),
    })

  https.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEOLOCATION_TOKEN}&ip=${ip}`, res => {
    let data = ``

    res.on(`data`, chunk => {
      data += chunk
    })

    res.on(`end`, () => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ ip, language, geo: JSON.parse(data) }),
      })
    })

  }).on(`error`, err => {
    callback(`Error: ${err.message}`)
  })
}