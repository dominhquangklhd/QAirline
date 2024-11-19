import React, { useState } from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

const Navbar = () => {
  const [active, setActive] = useState('navBarMenu');
  
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  }

  const removeNavBar = () => {
    setActive('navBarMenu');
  }

  const [bg, setBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      setBg('navBarTwo navbarWithBg');
    } else {
      setBg('navBarTwo');
    }
  }

  window.addEventListener('scroll', addBgColor)

  return (
    <div className='navBar flex'>
        <div className='navBarOne flex'>
          <div>
            <SiConsul></SiConsul>
          </div>

          <div className='none flex'>
            <li className='flex'><BsPhoneVibrate className='icon'/>Hỗ trợ</li>
            <li className='flex'><AiOutlineGlobal className='icon'/>Ngôn ngữ</li>
          </div>

          <div className="atb flex">
            <span>Đăng nhập</span>
            <span>Đăng xuất</span>
          </div>
        </div>

        <div className={bg}>
          <div className='logoDiv'>
            <img src="assets/logo.png" className='logo' />
          </div>

          <div className={active}>
            <ul className="menu flex">
              <li onClick={removeNavBar} className="listItem">Home</li>
              <li onClick={removeNavBar} className="listItem">About</li>
              <li onClick={removeNavBar} className="listItem">Offers</li>
              <li onClick={removeNavBar} className="listItem">Seats</li>
              <li onClick={removeNavBar} className="listItem">Destinations</li>
            </ul>

            <button onClick={removeNavBar} className="btn flex btnOne">Contact</button>
          </div>

          <div className='toggleIcon' onClick={showNavBar}>
            <CgMenuGridO className='icon'/>
          </div>          
        </div>
    </div>
  )
}

export default Navbar