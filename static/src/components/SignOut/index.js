import React from 'react'
import {AuthContext} from '../Auth'
import firebase from '../utils/firebase'

export default function SignOut() {
    return (
        <div>
         
            <button
 
  onClick={async () => firebase.auth().signOut()}
>Sign Out</button>
        </div>
    )
}
