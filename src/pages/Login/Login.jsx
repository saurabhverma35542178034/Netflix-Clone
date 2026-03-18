import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { SignIn, SignUp } from '../../firebase'

const Login = () => {
    const [signState, setSignState] = useState('Sign In');
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const user_authenticate = (e) => {
        e.preventDefault();
        if(signState == "Sign Up"){
            SignUp(name,email,password);
        } else {
            SignIn(email,password);
        }
    }
   

  return (
    <div className='login'>
          <img src={Logo} alt="" className='login-logo' />
          <div className="login-form">
              <h1>{ signState}</h1>
              <form>
                  {signState == "Sign Up" ?
                      <input type="text" placeholder='Yourname' value={name} onChange={(e) => {setName(e.target.value)}}/> : <></>}
                 
                  <input type="email" placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                  <input type="password" placeholder='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                  <button onClick={user_authenticate} type='submit'>Sign In</button>
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
