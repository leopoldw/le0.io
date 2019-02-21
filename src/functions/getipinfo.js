const https = require(`https`)

const DEVELOPMENT_BODY = `{"ip":"80.169.30.228","language":"en-US","geo":{"ip":"80.169.30.228","continent_code":"EU","continent_name":"Europe","country_code2":"GB","country_code3":"GBR","country_name":"United Kingdom","country_capital":"London","state_prov":"England","district":"Barking and Dagenham","city":"Barking","zipcode":"IG11","latitude":"51.5333","longitude":"0.0833","is_eu":true,"calling_code":"+44","country_tld":".uk","languages":"en-GB,cy-GB,gd","country_flag":"https://ipgeolocation.io/static/flags/gb_64.png","isp":"COLT Technology Services Group Limited","connection_type":"","organization":"","geoname_id":"2656333","currency":{"code":"GBP","name":"Pound Sterling","symbol":"£"},"time_zone":{"name":"Europe/London","offset":0,"current_time":"2019-02-21 16:44:00.519+0000","current_time_unix":1550767440.519,"is_dst":false,"dst_savings":1}}}`

exports.handler = ({ headers }, context, callback) => {
  if (process.env.NODE_ENV === `development`)
    return callback(null, {
      statusCode: 200,
      body: DEVELOPMENT_BODY,
    })

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

  // external library imports aren't working :( so just use node core libs
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