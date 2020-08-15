import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const PasswordForget = () => {
    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(null)
    
    const handleChange = e => {
        const {name, value} = e.currentTarget
        if (name === 'userEmail') {
            setEmail(value)
        }
    }

    const sendResetEmail = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h1>Reset your Password</h1>
            <form>
            <label htmlFor="userEmail">
                Email:
            </label>
            <input type='email' name="userEmail" value={email} placeholder="Input your email" onChange={handleChange} />
            <button>Send me a reset link</button>
            </form>
            <Link to="/signin">
                &larr; back to sign in page
            </Link>
        </div>
    )
}
export default PasswordForget