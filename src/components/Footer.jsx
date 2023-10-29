import React from 'react';
import style from './Footer.module.css';
import logogit from '../images/github.png';
import logolinkedin from '../images/linkedin.png'

export function Footer(){
    return(
        <footer /*className={style.footerstyle}*/>
            <a href="https://www.linkedin.com/in/colin-mickus-845558260/"><img src={logolinkedin} alt='logo de linkedin'/></a>
            <a href="https://github.com/CMickus"><img src={logogit} alt='logo de github'/></a>
            <p>mickuscolin@gmail.com</p>
        </footer>
    )
}
export default Footer
