import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
import style from './Header.module.css'


/*Navlink plutot que Link permet un changement du visuel si on est sur la page sur lequel le lien mène ( a travailler)*/
export function Header() {
    return (
        <header className={style.headerstyle}>
            <div className={style.nav}>
                <NavLink
                    to="/" className={style.link}>
                    Français
                </NavLink>
                <NavLink to="/en" className={style.link}>
                    English
                </NavLink>
            </div>
        </header>
    )
}

//export default { Header }