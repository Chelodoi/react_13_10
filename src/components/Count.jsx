import { useState } from 'react'

export const Count = (props) => {
  const [count, setCount] = useState(1)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <p>{props.name}</p>
      <p>Count State: {count}</p>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </>
  )
}
