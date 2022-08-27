import React from 'react';
import style from "./Work.module.css";
import ecommerce1 from '../../images/ecommerce1.jpeg'
import pokemon from '../../images/pokemon.png'
import spidey1 from '../../images/spidey1.jpeg'
import spidey2 from '../../images/spidey2.jpeg'
import spidey3 from '../../images/spidey3.jpeg'
import Button from '../mini-components/button';
import disney from '../../images/disney.png'
import { Link } from "react-router-dom"

export default function Work() {
    return (
        <div className={style.container}>
            <Link to={'/'}>
                <Button valor='Home' />
            </Link>

            <h2 className={style.title}>Some of My Work</h2>
            <section className={style.section}>
            <div className={style.card}>
                    <figure >
                        <img className={style.images} src={disney} />
                    </figure>

                    <p className={style.techs}>React  Redux  Typescript Css</p>

                    <h2 className={style.child}>Disney app</h2>

                    <p className={style.text}>
                    Search for a character from the Diseney world and let the app display a card with their information. With different images and information according to the data provided by the Disney API, this was one of my first applications developed with Typescript
                    </p>
                    <div className={style.links}>
                        <a className={style.icon} href='https://diney-ts.vercel.app/' target='_blank' >
                            <ion-icon name="link-outline"></ion-icon>
                        </a>
                        <a className={style.icon} href="https://github.com/thomasHeitFux/Diney-ts" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>

                <div className={style.card}>
                    <figure >
                        <img className={style.images} src={ecommerce1} />
                    </figure>

                    <p className={style.techs}>React  Redux  TailwindCss Node.js</p>

                    <h2 className={style.child}>Shoes-Ecommerce</h2>

                    <p className={style.text}>
                        Plan-B is an ecommerce that allows you to buy
                        and sell
                        sneakers .
                        I was in charge of engineering both the front-end of the site and the back-end, designing some components, adding styles to others and contributing to the development of the back-end of the application.sas
                    </p>
                    <div className={style.links}>
                        <a className={style.icon} href='https://planb-rho.vercel.app/' target='_blank' >
                            <ion-icon name="link-outline"></ion-icon>
                        </a>
                        <a className={style.icon} href="https://github.com/txakurhub/pfinal_client" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
                
                <div className={style.card}>
                    <figure >
                        <img className={style.imgp} src={spidey3} />
                        <img className={style.imgp} src={spidey2} />
                        <img className={style.imgp} src={spidey1} />
                    </figure>

                    <p className={style.techs}>React Native Css Marvel API</p>

                    <h2 className={style.child}>Marvel-App</h2>

                    <p className={style.text}>
                    Search for a character from the Marvel universe and let the app display a card with their information. With different images and information according to the data provided by the Marvel API, this was one of my first applications developed with react native</p>
                    <div className={style.links}>
                        <a className={style.icon} href="http://" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="link-outline"></ion-icon>
                        </a>
                        <a className={style.icon} href="https://github.com/thomasHeitFux/Marvel-RN" target="_blank">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
                
                

                <div className={style.card} >
                    <figure >
                        <img className={style.images} src={pokemon} />
                    </figure>

                    <p className={style.techs}>React Redux Node.js Express</p>

                    <h2 className={style.child}>Pokemon-App</h2>

                    <p className={style.text}>
                        Single Page Application that displays pokemons brought through the use of an external API; the app is capable of paginating the results, sort them either by alphabetical order or rating, filter the results by creation type or genres, and much more.
                    </p>
                    <div className={style.links}>
                        <a className={style.icon} href='https://poke-app-three-bice.vercel.app/' target='_blank' >
                            <ion-icon name="link-outline"></ion-icon>
                        </a>
                        <a className={style.icon} href="https://github.com/thomasHeitFux/pokemon_front" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>

                
            </section>

        </div>
    )
}