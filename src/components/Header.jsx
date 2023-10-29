import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
//import style from './Header.module.css'

export function Header() {
    return (
        <header /*className={style.headerstyle}*/>
            
            <div /*className={style.nav}*/>
                {/*<NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? style.active : style.link}>
                    Acceuil
                </NavLink>
                <NavLink to="/A-propos" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? style.active : style.link}>
                    À propos
    </NavLink>*/} 
            </div>
        </header>
    )
}