import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import firebase from '../utils/firebase'
import { withRouter} from 'react-router-dom'



 async function SignUp({username, email, passwordTwo, passwordOne, error, history}) {
    
    const [errors, setErrors] = useState()
    const {register, handleSubmit}= useForm()
    
    if(passwordOne !== passwordTwo) {
        setErrors("Passwords do not match")
        return
    }
    if(passwordOne.length < 6 ) {
        setErrors("Password must be more than 6 characters")
        return
    }

    const onSubmit = (async e => {
        e.preventDefault()
       
       history.push('/home')
    
try {
  
  await firebase
  .auth()
  .createEmailAndPassword(email,passwordOne) 
    history.push('/')
      } catch {
        alert(error);
      
   }
 }, [history])

    return (
       
    <form onSubmit={handleSubmit(onSubmit)}>
            <input  name="username" value={username}  type="text" placeholder="Full Name" reg={register({required: true})} />
            {errors.username && <p>This is required</p>}
            <input  name="email" value={email}  type="email" placeholder="Email Address" reg={register({required: true})} />
            {errors.email && <p>This is required</p>}
            <input  name="passwordOne" value={passwordOne}  type="text" placeholder="Password" reg={register({required: true})} />
            {errors.passwordOne && <p>This is required</p>}
            <input  name="passwordTwo" value={passwordTwo}  type="text" placeholder="Confirm Password" reg={register({required: true})} />
            {errors.passwordTwo && <p>This is required</p>}
            <button  type="submit">Sign Up</button>
    {error && <p>{error.message}</p>}
        </form>
    )
}



export default withRouter(SignUp)