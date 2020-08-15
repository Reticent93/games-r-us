import React, {useState} from 'react'
import  {  Link } from 'react-router-dom'


const SignIn = ({  history}) => {
  
    const [email, setEmail] = useState("")
    const [passwordOne, setPasswordOne] = useState("")
    const [errors, setErrors] = useState(null)
   

    const signInWithEmailPassword = (e, email, passwordOne) => {
        e.preventDefault()
    }

    const handleChange = e => {
        const {name, value} = e.currentTarget

        if (name === "userEmail") {
            setEmail(value)
        }
     else if(name === "userPassword") {
        setPasswordOne(value)
    }
}


    return ( 
        <div>
            <h1>SignIn</h1>
            <form >
            <label htmlFor="userEmail">
                Email:
            <input name="userEmail" value={email} type="email" placeholder="Email" onChange={e => handleChange(e)} />
            {errors.email && <p>This is required</p>}
            { console.log("email", email)}
            </label>
            Password:
            <label htmlFor="userPassword">
            <input  name="passwordOne"   value={passwordOne} type="text" placeholder="Password" onChange={e => handleChange(e)}  />
            {errors.passwordOne && <p>This is required</p>}
            </label>
            <button  type="submit" onClick ={e => {signInWithEmailPassword(e, email, passwordOne)}}>Sign In</button>
        </form>
        <p>
            Don't have an account? {" "}
            <Link to={"/signup"}>
                Sign Up Here
            </Link>{" "}
        </p>


        </div>
    )
}


export default SignIn