import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, toggleProfile } from 'src/store/profile/slice'
import { selectName, selectVisible } from '../store/profile/selectors'
import { onValue, update } from 'firebase/database'
import { userRef } from 'src/services/firebase'

export const Profile: FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const visible = useSelector(selectVisible) //подписывается на стейт и возвращает его часть
  const name = useSelector(selectName)

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      //позволяет подписатться
      const user = snapshot.val()
      dispatch(changeName(user.name || ''))
      console.log(user)
    })
  }, [])

  const handleChangeName = () => {
    update(userRef, {
      name: value,
    })
  }

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
      <button onClick={handleChangeName}>change name</button>
    </>
  )
}
