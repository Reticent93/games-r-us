import React, { createContext, useState, useEffect } from 'react'
import firebase from '../utils/firebase'

export const AuthContext = createContext()

export const AuthProvider =  ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)  
  const [pending, setPending] = useState(true)
  console.log("auth", currentUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
    setCurrentUser(user)
    setPending(false)
    })
  }, []);
  if(pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

