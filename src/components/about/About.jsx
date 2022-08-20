import React from 'react';
import style from "./About.module.css";
import { Link } from "react-router-dom"
import Button from '../mini-components/button';

export default function About() {
    return (
        <div className={style.father}>
            <Link to={'/'}>
                <Button valor='Home' />
            </Link>
            <div className={style.container}>
                <p >I’m a full stack web developer from Argentina, who enjoys the creation of projects. Recently, I graduated from a full-stack coding Bootcamp and want to start developing my career in the tech world.
                </p>

                <p>
                    An enthusiastic person, challenge-lover, and someone that always wants something new to learn about.
                </p>

                <p>
                    Whenever I’m not coding, you can find me either playing videogames or learning a song on the guitar
                </p>
                <p>
                    Some of the technologies I've been working with recently are...
                    <span><br/></span><br/>
                <ul>
                    <li><ion-icon name="logo-javascript"></ion-icon> JavaScript (ES6)</li>
                    <li><ion-icon name="logo-react"></ion-icon>React</li>
                    <li><ion-icon name="logo-css3"></ion-icon>Css</li>
                    <li><ion-icon name="logo-nodejs"></ion-icon>Node.js</li>
                    <li>Express.js</li>
                    <li>postgreSQL</li>
                </ul>
                   
                </p>
            </div>
        </div>
    )
}