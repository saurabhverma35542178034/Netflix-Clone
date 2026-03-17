import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'

const Login = () => {
    const [signState, setSignState] = useState('Sign In');

  return (
    <div className='login'>
          <img src={Logo} alt="" className='login-logo' />
          <div className="login-form">
              <h1>{ signState}</h1>
              <form>
                  { signState == "Sign Up"? <input type="text" placeholder='Yourname' />:<></>}
                 
                  <input type="email" placeholder='email' />
                  <input type="password" placeholder='password' />
                  <button>Sign In</button>
                  <div className='form-help'>
                      <div className='remember'>
                          <input type="checkbox" />
                          <label htmlFor="">Remember Me
                          </label>
                      </div>
                      <p>Need help?</p>
                  </div>
              </form>
              <div className="form-switch">
                  <p>New To Netflix <span onClick={() => { setSignState('Sign Up')}}>SignUp now</span></p>
                  <p>Already have a Account <span>Sign In</span></p>
              </div>
          </div>
    </div>
  )
}

export default Login
