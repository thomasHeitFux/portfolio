import React from 'react';
import profile from '../../images/sinfondo.png'
import style from "./home.module.css";
import { Link } from 'react-router-dom'

export default function Home() {
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

        </div>
    )
}