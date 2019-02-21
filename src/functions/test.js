exports.handler = (...props) => {
  console.log(props)
  props.callback(null, {
    statusCode: 200,
    body: JSON.stringify(props),
  })
}