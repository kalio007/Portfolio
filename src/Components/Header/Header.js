import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import 'Header.css';

export default function Header(){

    const [toggleMenu, setToggleMenu] = React.useState(false)

    return (
        <div className='Header'>
            <div className='NavContainer'>
            <div>
                <h1>
                    Kalio
                </h1>
            </div>

            <div>
            <p><a href="#home" >Home</a></p>
            <p><a href="#" ></a>Skills</p>
            <p><a href="#" ></a>Projects</p>
            <p><a href="#" ></a>Contact</p>

                <button type='button'>Resume</button> 
            </div>
            </div>

            <div>
                {toggleMenu 
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div>
                    <p><a href="#home" >Home</a></p>
                    <p><a href="#" ></a>Skills</p>
                    <p><a href="#" ></a>Projects</p>
                    <p><a href="#" ></a>Contact</p>
    
                    <button type='button'>Resume</button> 
                </div>
                )}

            </div>
            
        </div>

       
    )
}