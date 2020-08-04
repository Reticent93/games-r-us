import React, {useCallback, useState} from 'react'
import {useForm} from 'react-hook-form'
import firebase from '../utils/firebase'
import { withRouter} from 'react-router-dom'


const  SignUp = ({history}) => {
  
    
   const [errors, setErrors] = useState()
    const {register, handleSubmit}= useForm()
    


    const onSubmit = useCallback(async e => {
        e.preventDefault()
       const {email, passwordOne} = e.target.elements
       history.push('/')
    
try {
  
  await firebase
  .auth()
  .createUserWithEmailAndPassword(email.value,passwordOne.value);
    history.push('/')
      } catch(error) {
        alert(error);
   }
 }, [history])

    return (
       <div>
         <h1>Sign Up</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
            <input  name="username"  type="text" placeholder="Full Name" reg={register({required: true})} />
            {errors.username && <p>This is required</p>}
            <input  name="email"   type="email" placeholder="Email Address" reg={register({required: true})} />
            {errors.email && <p>This is required</p>}
            <input  name="passwordOne"  type="text" placeholder="Password" reg={register({required: true})} />
            {errors.passwordOne && <p>This is required</p>}
            <input  name="passwordTwo"  type="text" placeholder="Confirm Password" reg={register({required: true})} />
            {errors.passwordTwo && <p>This is required</p>}
            <button  type="submit">Sign Up</button>
  
        </form>
        </div>
    )
}



export default withRouter(SignUp)