import React, {Component} from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Typical from 'react-typical';
import './Intro.css';

export default function Intro(){
    return(
        <div className="Intro" id='home'>

            <div className="Intro-image">
                /*insert image */
            </div>

            <div className="Intro-text">
                <div  className="home-text">
                <p className="name-green"> hello! I'm  </p>
                <h2> <Typical
                className = 'typical'
                loop={1}
                wrapper="b"
                steps={['Kalio Princewill', 200]}/>
                </h2>
                <p className="Intro-subtext">I am a Frontend Developer
                <br/>
                i create reponsive web applications====thinks about thinks ro add tbh</p>
                <div className = 'my-preview-icons'>
                    <div className = 'my-preview-icons-container'>
                        <a href="https://github.com/kalio007"><i><FaGithub/></i></a>
                        <a href=""><img/></a>
                        <a href=""><img/></a>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}
