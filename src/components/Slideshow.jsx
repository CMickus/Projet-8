import React, { useState } from 'react';
import style from './Slideshow.module.css'
import arrow from '../images/Arrowleft.svg'

/*Ici utilisation basique du useState comme compteur : 
on va simplement compter le nombre d'images dans la liste, au dernier numéro on repasse au premier et vis versa
On rajoute un if else pour le cas où il n'y a qu'une seule image */
export function Slideshow(prop) {
    const [count, setCount] = useState(0);
    console.log(prop.prop.length)
    if (prop.prop.length === 1) {
        return (<div className={style.cover}> 
            <img className={style.pictures} src={prop.prop} alt="hello"></img>
        </div>)
    } else {
        return (
            <div className={style.cover}>
                <button className={style.minus} onClick={() => {
                    if (count === 0) {
                        setCount(prop.prop.length - 1);
                    } else {
                        setCount(count - 1)
                    }
                }}> 
                   <img src={arrow} alt="bouton fleche minus" />
                </button>
                <img className={style.pictures} src={prop.prop[count]} alt="hello" />
                <p className={style.number}>{count + 1}/{prop.prop.length}</p>
                <button className={style.plus} onClick={() => {
                    
                    if (count === prop.prop.length - 1) {
                        setCount(0)
                    } else {
                        setCount(count + 1)
                    }
                }}> 
                  <img src={arrow} className={style.arrowright} alt="bouton fleche plus" />
                </button>
            </div>
        )
    }
}

export default Slideshow