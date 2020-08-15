import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import firebase from '../utils/firebase'
import { withRouter} from 'react-router'
import { auth } from 'firebase'






const  SignUp = (props) => {
   const [error, setError] = useState()
    const [email, setEmail] = useState("")
    const [passwordOne, setPasswordOne] = useState("")
    const [passwordTwo, setPasswordTwo] = useState("")
    const [username, setUsername] = useState('')

    const createUserWithEmailPassword = (e, email, passwordOne) => {

      try {
         firebase.auth.createUserWithEmailPassword(email, passwordOne)
         props.history.push('/signin')
      } catch(err) {
        alert(err.message)
      }
      e.preventDefault()
      setEmail('')
      setPasswordOne('')
      setPasswordTwo('')

    }
  

const handleChange = e => {
  const {name, value} = e.currentTarget
  if(name === "userEmail") {
    setEmail(value)
  } else if(name === "userPassword") {
    setPasswordOne(value)
  } else if(name === "username") {
    setUsername(value)
  }
};

return (
  <div>
    <h1>Sign Up</h1>
    <div>
      {error !== null && (
        <div>
          {error}
        </div>
      )}
      <form >
        <label htmlFor="username" >
          Display Name:
        </label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Name"
          id="username"
          onChange={e => handleChange(e)}
        />
        <label htmlFor="userEmail">
          Email:
        </label>
        <input
          type="email"
          name="userEmail"
          value={email}
          placeholder="Email"
          id="userEmail"
          onChange={e => handleChange(e)}
        />
        <label htmlFor="userPassword">
          Password:
        </label>
        <input
          type="password"
          name="userPassword"
          value={passwordOne}
          placeholder="Your Password"
          id="userPassword"
          onChange={event => handleChange(event)}
        />
        <button
          onClick={e => {
            createUserWithEmailPassword(e, email, passwordOne);
          }}
        >
          Sign up
        </button>
      </form>
      <p>or</p>
      <button>
        Sign In with Google
      </button>
      <p>
        Already have an account?{" "}
        <Link to="/signin">
          Sign in here
        </Link>
      </p>
    </div>
  </div>
);

}



export default SignUp