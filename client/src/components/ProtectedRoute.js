import {useContext} from 'react'
import {Route, Redirect} from "react-router-dom"
import AuthContext from '../context/UserContext';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {auth} = useContext(AuthContext)
  return (
    <Route
        {...rest}
        render={props => {
          if (auth.username) {
          return <Component {...props} />
          } else {
            return (
              <Redirect to={'/login'} />
            )
          }
      }}
    />
  )
}
