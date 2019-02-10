import React from 'react'

class Test extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: false,
    }

    this.setSetStateCallback = this.setSetStateCallback.bind(this)
  }

  setSetStateCallback() {
    console.log(`State set.`)

    this.setState({ test: true })
  }

  render() {
    console.log(`RENDER`)
    return (
      <div>
        <button onClick={this.setSetStateCallback}>{this.state.test ? `YES` : `TEST?`}</button>
      </div>
    )
  }
}

export default Test