import React from 'react';
import style from './Footer.module.css';
import logogit from '../images/github.png';
import logolinkedin from '../images/linkedin.png'

export function Footer() {
    return (
        <footer className={style.footerstyle}>
            <div>
                <a href="https://www.linkedin.com/in/colin-mickus-845558260/"><img src={logolinkedin} alt='logo de linkedin' className={style.footerlink}/></a>
                <a href="https://github.com/CMickus"><img src={logogit} alt='logo de github' className={style.footerlink} /></a>
            </div>
            <div className={style.text}>
                <p>mickuscolin@gmail.com</p>
                <p>Colin Mickus</p>
            </div>
        </footer>
    )
}
export default Footer
