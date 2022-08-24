import React from 'react';
import profile from '../../images/sinfondo.png'
import style from "./home.module.css";
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Home() {
    const [toggle, setoggle] = useState(false);
    const handleCopy = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText('thomas41392@gmail.com');
        setoggle(!toggle);
    }
    if (toggle) {
        setTimeout(() => {
            setoggle(false)
        }, 3000)
    }
    return (

        <div className={style.father}>
            <div className={style.photo}></div>
            <div className={style.container}>
                <h1>
                    <Link to='/about'>
                        <a className={style.awhite}>About</a>
                    </Link>
                    <Link to='/work'>
                        <a className={style.awhite}>Work</a>
                    </Link>

                    <Link to='/contact'>
                        <a className={style.awhite}>Contact</a>
                    </Link>
                </h1>
            </div>

            <div className={style.icons}>
                <a href='https://github.com/thomasHeitFux/' target={'_blank'}>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href='https://www.linkedin.com/in/dominguezthomas/' target={'_blank'}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>

                <a className={style.mail} onClick={(e) => { handleCopy(e) }}>
                    <span className={style.copied} style={toggle ? { opacity: 1 } : { opacity: 0 }}>Copied!</span>
                    <ion-icon name="mail-outline"></ion-icon>
                </a>
            </div>
        </div>
    )
}