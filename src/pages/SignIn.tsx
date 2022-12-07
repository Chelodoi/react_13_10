import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from 'src/services/firebase'
import { changeAuth } from 'src/store/profile/slice'

export const SignIn: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      dispatch(changeAuth(true))
    } catch (err) {
      setError((err as Error).message)
    }
  }
  return (
    <>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <p>Email:</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Sign in</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
