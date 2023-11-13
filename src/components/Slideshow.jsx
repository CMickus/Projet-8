import React, { useState } from 'react';
import style from './Slideshow.module.css';
import arrow from '../images/download.svg';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';

/*Ici utilisation basique du useState comme compteur : 
on va simplement compter le nombre d'images dans la liste, au dernier numéro on repasse au premier et vis versa
On rajoute un if else pour le cas où il n'y a qu'une seule image */
export function Slideshow() {
    const [count, setCount] = useState(0);
    const slideshow = [image1, image2, image3, image4, image5]
    console.log(slideshow.length)
    
        return (
            <div className={style.cover}>
                <button className={style.minus} onClick={() => {
                    if (count === 0) {
                        setCount(slideshow.length - 1);
                    } else {
                        setCount(count - 1)
                    }
                }}> 
                   <img src={arrow} alt="bouton fleche minus" />
                </button>
                <img className={style.pictures} src={slideshow[count]} alt="hello" />
                <p className={style.number}>{count + 1}/{slideshow.length}</p>
                <button className={style.plus} onClick={() => {
                    
                    if (count === slideshow.length - 1) {
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

export default Slideshow