import React from 'react';
import './Project.css';
import { ProjectData } from './ProjectData';

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaRegEye } from "react-icons/fa";

export default function Project(){
    return(
        <div className="Project">
            <div className="heading scale-up-center">
                <h4>Project</h4>
            </div>
            <div className="project max-width" data-aos="fade-up">
                <div className="project-text"></div>
                <div className="project-items flex">
                    {
                        ProjectData.map((item) => (
                            <div
                                key={item.title}
                                className='item'
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}>
                                <div className="item-img">
                                    <div className="item-text">
                                        <span className="green">
                                            {item.description}
                                        </span>
                                        <h5>
                                            {item.title}
                                        </h5>
                                        <div className="text ">
                                            <p className='gradient__text'>
                                                {item.writeUp}
                                            </p>
                                        </div>
                                        <ul className="lang-type flex">
                                            <li>{item.react}</li>
                                            <li>{item.scss}</li>
                                            <li>{item.redux}</li>
                                            <li>{item.html}</li>
                                            <li>{item.bootstrap}</li>
                                        </ul>
                                        <div className="icon flex">
                                            <a href={item.gitHub} target="_blank" rel="noreferrer">
                                                <i><FaGithub /></i>
                                            </a>
                                            <a href={item.link} target="_blank" rel="noreferrer">
                                                <i><FaRegEye /></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}