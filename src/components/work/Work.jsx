import React from 'react';
import style from "./Work.module.css";
import ecommerce1 from '../../images/ecommerce1.jpeg'
import ecommerce2 from '../../images/ecommerce2.jpeg'
import ecommerce3 from '../../images/ecommerce3.jpeg'
import ecommerce4 from '../../images/ecommerce4.jpeg'
import admin1 from '../../images/admin1.jpeg'
import admin2 from '../../images/admin2.jpeg'
import admin3 from '../../images/admin3.jpeg'
import admin4 from '../../images/admin4.jpeg'
import admin5 from '../../images/admin5.jpeg'
import pokemon from '../../images/pokemon.png'
import spidey1 from '../../images/spidey1.jpeg'
import spidey2 from '../../images/spidey2.jpeg'
import spidey3 from '../../images/spidey3.jpeg'
import Button from '../mini-components/button';
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
                            <img className={style.imgp} src={spidey3} />
                            <img className={style.imgp} src={spidey2} />
                            <img className={style.imgp} src={spidey1} />
                    </figure>
                    
                    <p className={style.techs}>React Native Css Marvel API</p>

                    <h2  className={style.child}>Marvel-App</h2>
                    
                    <p className={style.text}>Esta app fue la primera que realice con React Native es una app ludica con tematica en marvel, la misma permite visualizar el listado de personajes y sus respectivos detalles,y buscar por nombre. si bien es bastante sencilla me sirvio para reforzar un poco los conocimientos en react y tambien como primer acercamiento a react native</p>
                    <div className={style.links}>
                    <a className={style.icon} href="http://" target="_blank" rel="noopener noreferrer">
                    <ion-icon  name="link-outline"></ion-icon>         
                    </a>
                    <a className={style.icon} href="https://github.com/thomasHeitFux/Marvel-RN"  target="_blank">
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
                
                    <p className={style.text}>Esta app fue la primera single page aplication que realice es una app ludica con tematica en pokemon, la misma permite visualizar el listado de personajes y sus respectivos detalles, tambien se puede filtrar , buscar por nombre y tambien crear tu propio personaje
                    </p>
                    <div className={style.links}>
                    <a className={style.icon} href='https://poke-app-three-bice.vercel.app/' target='_blank' >
                    <ion-icon name="link-outline"></ion-icon>
                    </a>
                    <a className={style.icon} href="https://github.com/thomasHeitFux/pokemon_front" target="_blank" rel="noopener noreferrer">
                    <ion-icon  name="logo-github"></ion-icon>
                    </a>
                    </div>
                </div>

                <div className={style.card}>
                    <figure >
                        <img className={style.images} src={ecommerce1} />
                    </figure>

                    <p className={style.techs}>React  Redux  TailwindCss Node.js</p>
                   
                    <h2 className={style.child}>Shoes-Ecommerce</h2>
               
                    <p className={style.text}>plan-b es un ecommerce de calzados que desarrollamos con el equipo asignado para el proyecto final de henry conformado por 8 integrantes, la app cuenta con logueo por gmail o email, pasarela de pago utilizando mercadopago, listado y detalles ificaciones como bannearlos o agregar rol de vendedor en caso de asi quererlo entre otras cosas
                    </p>
                    <div className={style.links}>
                    <a  className={style.icon} href='https://planb-rho.vercel.app/' target='_blank' >
                    <ion-icon name="link-outline"></ion-icon>
                    </a>
                    <a className={style.icon} href="https://github.com/txakurhub/pfinal_client" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                    </a>
                    </div>
                </div>
            </section>

        </div>
    )
}