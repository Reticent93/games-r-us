import React, { createContext, useState, useEffect } from 'react'
import firebase from '../utils/firebase'

export const AuthContext = createContext()

export const AuthProvider =  ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)  

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser)
  }, []);

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext