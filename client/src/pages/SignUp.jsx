import React, {useState} from 'react'

import './SignUp.css'

const SignUp = ({history}) => {
  const [loged, setLoged] = useState(false)

  const login = () => {
    setLoged(true)
  }

  if (loged) {
    history.push('/')
  }

  return (
    <div className="signup-page">
        <div className="signup-form">
            <h1>Sing Up</h1>
            <div className="name-surname">
                <input type="text" placeholder='name' />
                <input type="text" placeholder='surname' />
            </div>
            <input type="text" placeholder='username' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button onClick={login}>Create account</button>
        </div>
    </div>
  )
}

export default SignUp