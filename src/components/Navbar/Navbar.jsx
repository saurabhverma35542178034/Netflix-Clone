import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (  
    <div className='navbar'>
          <div className="navbar-left">
              <img src={Logo} alt="" />
              <ul>
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>New & Popular</li>
                  <li>My List</li>
                  <li>Browse By Language</li>
                  
              </ul>
          </div>
          <div className="navbar-right">
              <img src={SearchIcon} alt="" className='icons' />
              <p>Children</p>
              <img src={bellIcon} alt="" />
              <div className="navbar-profile">
                  <img src={profile_img} alt="" className='profile' />
                  <img src={caret_icon} alt="" className='caret' />
                  <div className="dropdown">
                      <p>Sign Out</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar
    