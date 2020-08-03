import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from '../Navigation'
import Landing  from '../Landing'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import PasswordForget from '../PasswordForget'
import Home from '../Home'
import Accout from '../Account'
import Admin from '../Admin'

import { AuthProvider } from '../Firebase/context'
import PrivateRoute from '../PrivateRoute/privateRoute'


export default function App() {
    return (
        <AuthProvider>
        <Router>
            <div>
            <Navigation />
            <hr />
            <PrivateRoute exact path='/' component={Landing} />
            <Route  path='signup' component={SignUp} />
            <Route  path='signin' component={SignIn} />
            <Route  path='/pw-forget' component={PasswordForget} />
            <Route  path='/home' component={Home} />
            <Route  path='/account' component={Accout} />
            <Route  path='/admin' component={Admin} />
            </div>
        </Router>
        </AuthProvider>
    )
}
