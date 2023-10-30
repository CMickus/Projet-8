import React from "react";
import style from './Nav.module.css';
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export function Nav() {


    return (
        <Menu>
            <a href="/" className={style.navbarlink}>
                À propos
            </a>
            <a href="/" className={style.navbarlink}>
                Compétences
            </a>
            <a href="/" className={style.navbarlink}>
                Langues
            </a>
            <a href="/" className={style.navbarlink}>
                Diplômes
            </a>
            <a href="/" className={style.navbarlink}>
                Éxpériences
            </a>
            <a href="/" className={style.navbarlink}>
                Contact
            </a>
        </Menu>
    )
}

export default Nav