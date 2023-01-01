import React from 'react';
import './Skills.css';
import { SkillsData } from './SkillsData';


export default function Skills(){
    
    return(
        <div className='Skills'>
            <div className='skill-container'>
                {
                    SkillsData.map((props) => (
                        <div className='Skills-des'
                        key={props.id}>
                                <div className='skills-items'>
                                <img src={props.img}/>
                                <p>{props.name}</p>
                            </div>
                            
                            

                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}