import React, {useState, useContext, useCallback} from 'react'
import {useForm} from 'react-hook-form'
import  { Redirect, withRouter } from 'react-router-dom'
import firebase from '../utils/firebase'
import {AuthContext} from '../Auth'


function SignIn({  history}) {
  
    const [errors, setErrors] = useState()
    const {handleSubmit} = useForm()

    const onSubmit = useCallback(async e => {
        e.preventDefault()
       const {email, passwordOne} = e.target.elements
       

    try {
        await firebase.auth().signInWithEmailAndPassword(email.value, passwordOne.value) 
        history.push('/home')
    }catch (err) {
        alert(err)
    }
    }, [history])

    const {currentUser} = useContext(AuthContext)
    if (currentUser) {
    return <Redirect to="/" />
}
    return ( 
        <div>
            <h1>SignIn</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  name="username"  type="text" placeholder="Full Name"  />
            {errors.username && <p>This is required</p>}
            <input  name="email"   type="email" placeholder="Email Address"  />
            {errors.email && <p>This is required</p>}
            <input  name="passwordOne"   type="text" placeholder="Password"  />
            {errors.passwordOne && <p>This is required</p>}
            <input  name="passwordTwo"   type="text" placeholder="Confirm Password"  />
            {errors.passwordTwo && <p>This is required</p>}
            <button  type="submit">Sign Up</button>
    
        </form>


        </div>
    )
}


export default withRouter(SignIn)