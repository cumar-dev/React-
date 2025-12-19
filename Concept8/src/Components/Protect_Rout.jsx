import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate } from 'react-router-dom';
export const Protect_Rout = ({element}) => {
  const {isAuthanticted} = useContext(AuthContext);
  if(!isAuthanticted) {
    return <Navigate to={'/login'} replace />
  }
  return element;
}

