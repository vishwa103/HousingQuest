import React from 'react'
import './Header.css'
import HomeIcon from '../../assets/icons/homeIcon.png'
import MenuIcon from '../../assets/icons/menuIcon.png'
import MapIcon from '../../assets/icons/mapIcon.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='d-flex text-white align-items-center gap-2'>
            <h1 className='logo m-0'>HQ</h1>
            <p className='logo-name m-0'>Housing <br/>Quest</p>
        </div>
        <div className='d-flex text-white align-items-center gap-2'>
            <img className='icon' src={MenuIcon} alt='menu'/>
            <img className='icon' src={MapIcon} alt='map'/>
        </div>
        <img className='icon' src={HomeIcon} alt='home'/>

    </div>
  )
}

export default Header