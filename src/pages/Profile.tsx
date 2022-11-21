import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileState } from '../store/profile/reducer'
import { changeName, toggleProfile } from '../store/profile/action'
export const Profile: FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const visible = useSelector((state: ProfileState) => state.visible) //подписывается на стейт и возвращает его часть
  const name = useSelector((state: ProfileState) => state.name)
  return (
    <>
      <h2>{name}</h2>
      <input type="checkbox" checked={visible} />
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
      />
      <button onClick={() => dispatch(changeName(value))}>change name</button>
    </>
  )
}
