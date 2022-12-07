import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { StoreState } from 'src/store'

interface PrivateRouterProps {
  component?: JSX.Element
}

export const PrivateRoute: FC<PrivateRouterProps> = ({ component }) => {
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth)
  if (!isAuth) {
    return <Navigate to="/signin" />
  }
  return component ? component : <Outlet />
}
