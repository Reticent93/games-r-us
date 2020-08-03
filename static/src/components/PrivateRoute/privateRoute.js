import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from '../Firebase/context'


const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
        {...rest}
        render={routerProps => 
        !!currentUser ? (
            <RouteComponent {...routerProps} />
        ) : (
            <Redirect to='/signin' />
        )
        }
        />
    )
}
export default PrivateRoute