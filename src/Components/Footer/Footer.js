import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css';

export default function Footer(){
    return(
        <div className='Footer'>

            <div className="contacts">
                
                <div>
                <h2 className='Footer-main'>
                    Get In Touch
                </h2>
                <div className='icons'>
                <a href="">
                <i><FaLinkedin /></i>
                </a>
                <a href="">
              <i><FaGithub /></i>
                </a>
                <a href="">
              <i><FaFacebook /></i>
                </a>
                </div>
                
                <div>
                <div>
                 <p className='email'>
                <a href="mailto:kalioprince1@gmail.com">kalioprince1@gmail.com</a>
                 </p>
                </div>
                </div>

                </div>
            </div>

        </div>
    )
}