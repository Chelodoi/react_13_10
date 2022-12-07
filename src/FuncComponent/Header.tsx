import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { logout } from 'src/services/firebase'
import { StoreState } from 'src/store'

const nav = [
  {
    id: '1',
    to: '/',
    name: 'Home',
  },
  {
    id: '2',
    to: '/profile',
    name: 'Profile',
  },
  {
    id: '3',
    to: '/chats',
    name: 'Chats',
  },
  {
    id: '4',
    to: '/exampleConect',
    name: 'Example Connect',
  },
  {
    id: '5',
    to: '/articles',
    name: 'Articles',
  },
]
export const Header: FC = () => {
  const [error, setError] = useState('')
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth)
  const navigate = useNavigate()

  const handleLogout = async () => {
    setError('')
    try {
      await logout()
    } catch (err) {
      setError((err as Error).message)
    }
  }

  const handleLogin = () => {
    navigate('/signin')
  }

  const handleRegistrate = () => {
    navigate('/signup')
  }

  return (
    <header>
      <ul>
        {nav.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.to}
              style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <main>
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegistrate}>Registration</button>
          </>
        )}
        {error && <p>{error}</p>}
        <Outlet />
      </main>
    </header>
  )
}
