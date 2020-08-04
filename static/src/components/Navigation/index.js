import React from 'react'
import {Link} from 'react-router-dom'
import SignOut from '../SignOut'


export default function Navigation() {
    return (
        <div>
            <ul>

                <li>
                    <Link to='/'>Landing</Link>
                </li>
                <li>
                    <Link to='/signin'>Sign In</Link>
                </li>
                <li>
                    <Link to='/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/account'>Account</Link>
                </li>
                <li>
                    <Link to='/admin'>Admin</Link>
                </li>
                <li>
                <SignOut />
                </li>
            </ul>
         
        </div>
    )
}
