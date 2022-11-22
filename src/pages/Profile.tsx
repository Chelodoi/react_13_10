import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, toggleProfile } from '../store/profile/action'
import { selectName, selectVisible } from '../store/profile/selectors'
export const Profile: FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const visible = useSelector(selectVisible) //подписывается на стейт и возвращает его часть
  const name = useSelector(selectName)
  return (
    <>
      <h2>{name}</h2>
      <input type="checkbox" checked={visible} />
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
      <hr />
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
      />
      <button onClick={() => dispatch(changeName(value))}>change name</button>
    </>
  )
}
