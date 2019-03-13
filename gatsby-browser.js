const LogRocket = require(`logrocket`)

exports.onClientEntry = () => {
  if (process.env.NODE_ENV === `production`)
    LogRocket.init(process.env.LOGROCKET)
}