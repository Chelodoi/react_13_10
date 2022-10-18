import React from 'react'

export class Input extends React.Component {
  changeInput = (ev) => {
    this.props.changeName(ev.target.value)
  }

  render() {
    return <input type="text" onChange={this.changeInput} />
  }
}
