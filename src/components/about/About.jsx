import React from 'react';
import style from "./About.module.css";
import { Link } from "react-router-dom"
import Button from '../mini-components/button';

export default function About() {
    return (
        <div >
            <section className={style.lord}>

            <Link to={'/'}>
                <Button   valor='Home' />
            </Link>
            </section>
        <div className={style.father}>
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
                    <span><br /></span><br />
                </p>
                <section className={style.icons}>
                    <div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50" align="center" margin-left="10px" />
                        JavaScript
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"alt="TypeScript" width="50" height="50" align="center" margin-left="10px"/>
                        TypeScript
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="50" height="50" align="center" margin-left="10px" />
                        React
                    </div>

                    <div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="50" height="50" align="center" margin-left="10px" />
                        Redux
                    </div>

                    <div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50" align="center" margin-left="10px" />
                        HTML
                    </div>

                    <div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" align="center" margin-left="10px" />
                        Css
                    </div>

                    <div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50" align="center" margin-left="10px" />
                        Bootstrap
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50" align="center" margin-left="10px" />
                        Node.js
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="50" height="50" align="center" margin-left="10px" />
                        postgreSQL
                    </div>
                    <div>
                        <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" align="center" margin-left="10px" />
                        firebase
                    </div>

                    <div>
                        <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50" align="center" margin-left="10px" />
                        git
                    </div>
                </section>
            </div>
        </div>
        </div>
    )
}