exports.handler = (event, context, callback) => {
  console.log(`EVENT`, JSON.stringify(event))
  console.log(`CONTEXT`, JSON.stringify(context))
  console.log(`ENV`, JSON.stringify(process.env))
  callback(null, { body: `done` })
}