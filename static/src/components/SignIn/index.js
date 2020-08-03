import React, {useState, useContext} from 'react'
import {useForm} from 'react-hook-form'
import  { Redirect, withRouter } from 'react-router-dom'
import firebase from '../../components/utils/firebase'
import AuthContext from '../Auth'


function SignIn({email, passwordOne,passwordTwo,username, history}) {
    const [errors, setErrors] = useState()
    const {handleSubmit} = useForm()
    const {currentUser} = useContext(AuthContext)
    if (currentUser) {
        return <Redirect to="/" />
    }
    const onSubmit = (async e => {
        e.preventDefault()
       
       history.push('/home')

    try {
        await firebase.auth().signInWithEmailAndPassword(email, passwordOne) 
    }catch (err) {
        setErrors(err.message)
    }

}, [history])
    return ( 
        <div>
            <h1>SignIn</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  name="username" value={username}  type="text" placeholder="Full Name"  />
            {errors.username && <p>This is required</p>}
            <input  name="email" value={email}  type="email" placeholder="Email Address"  />
            {errors.email && <p>This is required</p>}
            <input  name="passwordOne" value={passwordOne}  type="text" placeholder="Password"  />
            {errors.passwordOne && <p>This is required</p>}
            <input  name="passwordTwo" value={passwordTwo}  type="text" placeholder="Confirm Password"  />
            {errors.passwordTwo && <p>This is required</p>}
            <button  type="submit">Sign Up</button>
    
        </form>


        </div>
    )
}


export default withRouter(SignIn)