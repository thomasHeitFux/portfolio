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

                    <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRpclTVnrtwQBmmSZhmkzcBkxbKSFhwGWDGRLxvxgtMsLScvqHGrvZwZMmDpDwVTqqGGjSv' target='_blank' className={style.awhite}>Contact</a>
                </h1>
            </div>

            <div className={style.icons}>
                <a href='https://github.com/thomasHeitFux/' target={'_blank'}>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href='https://www.linkedin.com/in/dominguezthomas/' target={'_blank'}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRpclTVnrtwQBmmSZhmkzcBkxbKSFhwGWDGRLxvxgtMsLScvqHGrvZwZMmDpDwVTqqGGjSv" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="mail-outline"></ion-icon>
                </a>
            </div>
        
        </div>
    )
}