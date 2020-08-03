import React from 'react'
import firebase from '../Auth'

export default function SignOut() {
    return (
        <div>
            <h1>SignOut</h1>
            <button
 
  onClick={async () => firebase.auth().signOut()}
>Sign Out</button>
        </div>
    )
}
