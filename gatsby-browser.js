const LogRocket = require(`logrocket`)

exports.onClientEntry = () => {
  if (process.env.NODE_ENV === `production`)
    LogRocket.init(`xpnudi/le0io`)
}