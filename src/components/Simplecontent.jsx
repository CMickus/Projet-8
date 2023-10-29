import React from "react";
import '../index.css';

export function SimpleContent(props){
    return(<>
    <h2>{props.props.content}</h2>
    <p>{props.props.time}</p>
    </>)
}

export default SimpleContent