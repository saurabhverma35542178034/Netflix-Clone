import React from 'react'
import './Footer.css'
import YoutubeIcon from '../../assets/youtube_icon.png'
import FacebookIcon from '../../assets//facebook_icon.png'
import TwitterIcon from '../../assets/twitter_icon.png'
import InstagramIcon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer-icons">
              <img src={YoutubeIcon} alt="" />
              <img src={FacebookIcon} alt="" />
              <img src={TwitterIcon} alt="" />
              <img src={InstagramIcon} alt="" />
              
          </div>
          <ul>
              <li>Audio Description</li>
              <li>Help Center</li>
              <li>terms and use</li>
              <li>Privacy Policy</li>
              <li>Legal Notice</li>
              <li>Corporate Information</li>
              <li>Investor Realtions</li>
          </ul>
          <p className='copyright'>© 2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
