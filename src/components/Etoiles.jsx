import React from 'react';
import grey from '../images/greystar.png'
import yellow from '../images/Yellowstar.png'
import style from './Etoile.module.css'



function Star({ color }) {
    if(color ==="yellow"){
    return <img src={yellow} alt="colored rating star" />} else {
        return <img src={grey} alt="grey rating star"/> 
    }
}
export default function Etoile({ grade }) {
    console.log(grade)
    return <div className={style.stargroup}>
      {
        [1, 2, 3, 4, 5].map(
          (starnum) => <Star key={starnum} color={starnum > grade ? "grey" : "yellow"} />
        )
      }
    </div>
}
