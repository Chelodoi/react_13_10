import React, { FC } from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../store'
import { toggleProfile } from '../store/profile/action'
import { Dispatch } from 'redux'
interface ExampleConnectProps {
  visible: boolean
  toggle: () => void
}

export const ExampleConnect: FC<ExampleConnectProps> = (props) => {
  return (
    <>
      <h2>EXAMPLE CONNECT</h2>
      <input type="checkbox" checked={props.visible} />
      <button onClick={() => props.toggle()}>change visible</button>
    </>
  )
}
const mapStateToProps = (state: StoreState) => ({
  visible: state.profile.visible,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
})

export const ExampleConnectFunction = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleConnect)
