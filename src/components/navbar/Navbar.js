import React from 'react'
import image1 from '../../asset/cregital.PNG'
import './Navbar.css'

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className='navbar'>
            <div className="navbar__left">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
               <input type="text" placeholder="Search" className="navbar__left__search"/> 
            </div>
            <div className="navbar__right">
                <i className="fa fa-bell"></i>
                <img width="15" src={image1} alt="image" />
            </div>
        </nav>
    )
}

export default Navbar
