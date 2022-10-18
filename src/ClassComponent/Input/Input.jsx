import React from 'react'

export class Input extends React.Component {
  constructor(props) {
    super(props)
    this.changeInput((ev) => {
      this.props.setNameClass({ nameClass: ev.target.value })
    })
  }
  render() {
    return <input type="text" onChange={this.changeInput} />
  }
}
