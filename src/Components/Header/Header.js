import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Header.css';

export default function Header(){

    const [toggleMenu, setToggleMenu] = React.useState(false)

    return (
        <div className='Header'>
            <div className='Header-Container'>

            <div className='header-name'>
                <h1>
                    Kalio.
                </h1>
            </div>

            <div className='header-menu'>
                <p><a href="#home" >Home</a></p>
                <p><a href="#home" >Skills</a></p>
                <p><a href="#home" >Projects</a></p>
                <p><a href="#home" >Contact</a></p>
                <button type='button'>Resume</button> 
            </div>

            </div>

            <div className='header-smaller-menu'>
                {toggleMenu 
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div>
                    <p>Home</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Contact</p>
    
                    <button type='button'>Resume</button> 
                </div>
                )}

            </div>
            
        </div>

       
    )
}