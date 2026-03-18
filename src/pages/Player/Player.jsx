import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
return (
  <div className='player'>
    <img src={back_arrow_icon} alt="" />
    <iframe width="90%" height="90%" title='trailer'  allowFullScreen src='https://www.youtube.com/watch?v=YQQD67N5pi0&t=1363s'></iframe>
  </div>

)
}

export default Player
