import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from 'src/services/firebase'

export const SignUp: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email, password)

      navigate('/signin')
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <>
      <h2>SignUp</h2>
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
        <button>Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
