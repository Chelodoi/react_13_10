export const Input = ({ changeName }) => {
  function changeInput(ev) {
    changeName(ev.target.value)
  }
  return <input type="text" onChange={changeInput} />
}
