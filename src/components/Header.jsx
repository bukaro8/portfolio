import React, {Fragment, useState}from 'react';
// import {Link} from 'react-router-dom'
import header from './css/header.css'
import logo from '../images/logo.png'
import * as FaIcons from 'react-icons/fa'//this way you can call the icon you need from the library
// import MenuDown from './Menu-down';//?I added to this file directly
import { SideBarData } from './SideBarData';

const Header=()=>{
  const [showMenu, setShowMenu]=useState(false)
  const showBar=()=>{
    setShowMenu(!showMenu)
    
  }
  return(
    <Fragment>
      {/*Logo section*/}
      <header className='header sticky'>
        
        <a href='#hero'><img className='logo' src={logo} alt="logo VH" /></a>
        
      {/* ========================================== */}
      {/* menu section */}
      <article className="menuContainer">
        <nav id='navbar'>
        <FaIcons.FaBars 
        onClick={()=>{showBar()}}
        className='burger-menu '/>
          <ul className='menu-list'>
          {
            SideBarData.map((item, index)=>
              <li  className='menu-item nav-item'  key={index}>
                <a   className="menu-item-link nav-link" href={item.address}>{item.name}</a>
              </li>
            )
          }
        </ul>
        {/* //?I decide to create a more reactive menu with an external SideBarData file */}
          {/* <ul className='menu-list '>
            <li className="menu-item nav-item">
              <a href='#hero' className='menu-item-link nav-link' >Home</a>
            </li>
            <li className="menu-item">
              <a href='#about-anchor' className='menu-item-link nav-link' >About</a>
            </li>
            <li className="menu-item">
              <a href='#projects-anchor' className='menu-item-link nav-link' >Projects</a>
            </li>
            <li className="menu-item">
              <a className='menu-item-link nav-link' href='#contact-anchor'>Contact</a>
            </li>
          </ul> */}
        
        </nav>
      
      </article>
      {showMenu?
        <div className='menu-down-container'>
        <ul className='menu-down-list'>
          {
            SideBarData.map((item, index)=>
              <li onClick={()=>{showBar()}} className='menu-item nav-item menu-down-item'  key={index}>
                <a   className="menu-item-link nav-link menu-down-link" href={item.address}>{item.icon}{item.name}</a>
              </li>
            )
          }
        </ul>
      </div>
      :<span/>}

      </header>
      
    </Fragment>
)
}
// onClick={()=>console.log('click2')} className={`${showMenu?'':'vanish'}`}
export default Header