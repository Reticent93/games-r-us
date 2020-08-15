import React, {useState} from 'react'
import  {  Link } from 'react-router-dom'
import firebase from '../utils/firebase'


const SignIn = (props) => {
  
    const [email, setEmail] = useState("")
    const [passwordOne, setPasswordOne] = useState("")
    const [error, setError] = useState()
    const [username, setUsername] = useState('')
   

    const signInWithEmailPassword = (e, email, passwordOne) => {
        e.preventDefault()
        setEmail('')
        setPasswordOne('')
        
        try {
            firebase.auth().signInWithEmailPassword(email,passwordOne)
            props.history.push('/home')
        }catch(err) {
            alert(err.message)
        }
    }

    const handleChange = e => {
        const {name, value} = e.currentTarget

        if (name === "userEmail") {
            setEmail(value)
        }else if(name === "userPassword") {
        setPasswordOne(value)
    } else if(name === "username") {
        setUsername(value)
      }
}


    // return ( 
    //     <div>
    //         <h1>SignIn</h1>
    //         {error !== null && (
    //     <div>
    //       {error}
    //     </div>
    //   )}
    //         <form >
    //         <label htmlFor="username" >
    //       Display Name:
    //     </label>
    //     <input
    //       type="text"
    //       name="username"
    //       value={username}
    //       placeholder="Name"
    //       id="username"
    //       onChange={e => handleChange(e)}
    //     />
    //         <label htmlFor="userEmail">
    //             Email:
    //             </label>
    //         <input
    //          name="userEmail"
    //          value={email}
    //          type="email"
    //          placeholder="Email"
    //          id="userEmail"
    //          onChange={e => handleChange(e)}
    //          />
    //         {error.email && <p>This is required</p>}
            
           
    //         Password:
    //         <label htmlFor="userPassword">
    //         <input  name="passwordOne"   value={passwordOne} type="text" placeholder="Password" onChange={e => handleChange(e)}  />
    //         {error.passwordOne && <p>This is required</p>}
    //         </label>
    //         <button  type="submit" onClick ={e => {signInWithEmailPassword(e, email, passwordOne)}}>Sign In</button>
    //     </form>
    //     <p>
    //         Don't have an account? {" "}
    //         <Link to={"/signup"}>
    //             Sign Up Here
    //         </Link>{" "}
    //     </p>


    //     </div>
    // )
    return (
        <div>
          <h1>Sign In</h1>
          <div>
            {error !== null && <div>{error}</div>}
            <form className="">
              <label htmlFor="userEmail">
                Email:
              </label>
              <input
                type="email"
                name="userEmail"
                value = {email}
                placeholder="Email"
                id="userEmail"
                onChange = {(e) => onchange(e)}
              />
              <label htmlFor="userPassword">
                Password:
              </label>
              <input
                type="password"
                name="userPassword"
                value = {passwordOne}
                placeholder="Your Password"
                id="userPassword"
                onChange = {(e) => onchange(e)}
              />
              <button onClick = {(e) => {signInWithEmailPassword(e, email, passwordOne)}}>
                Sign in
              </button>
            </form>
            <p>or</p>
            <button>
              Sign in with Google
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" >
                Sign up here
              </Link>{" "}
              <br />{" "}
              <Link to = "/pw-forget" >
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      );
}


export default SignIn