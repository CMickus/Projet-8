import React from 'react';
import Etoile from './Etoiles.jsx';
import style from './Skill.module.css'

export function Skill(props){
    console.log(props.skill, props.grade);
    return (
        <div className={style.skilldisplay}>
        <p>{props.props.skill}</p>
        <Etoile grade={props.props.grade}/>
        </div>
    )
} 
export default Skill