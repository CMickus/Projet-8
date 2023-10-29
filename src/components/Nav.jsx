import React from "react";
import style from './Nav.module.css';
import { useState } from "react";

export function Nav() {
    const[showLinks, setShowLinks] = useState(false)

    const handleShowlinks = ()=>{
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`${showLinks ? [style.showLink, style.navbar] : [style.navbar] }`}>
            <div className={style.navbarflags}>flag</div>
            <ul className={style.navbarlinks}>
                <li className={[style.navbaritem, slideInDown1]}>
                    <a href="" className={style.navbarlink}>
                        À propos
                    </a>
                </li>
                <li className={[style.navbaritem, slideInDown2]}>
                    <a href="" className={style.navbarlink}>
                        Compétences
                    </a>
                </li>
                <li className={[style.navbaritem, slideInDown3]}>
                    <a href="" className={style.navbarlink}>
                        Langues
                    </a>
                </li>
                <li className={[style.navbaritem, slideInDown4]}>
                    <a href="" className={style.navbarlink}>
                        Diplômes
                    </a>
                </li>
                <li className={[style.navbaritem, slideInDown5]}>
                    <a href="" className={style.navbarlink}>
                        Éxpériances
                    </a>
                </li>
                <li className={[style.navbaritem, slideInDown6]}>
                    <a href="" className={style.navbarlink}>
                        Contact
                    </a>
                </li>
            </ul>
            <button className={style.navbarburger} onClick={handleShowlinks}>
                <span className={style.burgerline}></span>
            </button>
        </nav>
    )
}