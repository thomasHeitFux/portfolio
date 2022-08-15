import React from 'react';
import profile from '../../images/confondo.png'
import style from "./home.module.css";
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className={style.father}>
                <img className={style.img} src={profile} alt="" />
            <div className={style.container}>
                <Link to='/about'>
                <a className={style.awhite}>About</a>
                </Link>
                <Link to='/work'>
                <a className={style.awhite}>Work</a>
                </Link>
                <Link to='/contact'>
                <a className={style.awhite}>Contact</a>
                </Link>
            </div>

        </div>
    )
}