import React from 'react';
import Etoile from './Etoiles.jsx';

export function Skill(props){
    console.log(props.skill, props.grade);
    return (
        <>
        <p>{props.props.skill}</p>
        <Etoile grade={props.props.grade}/>
        </>
    )
} 
export default Skill