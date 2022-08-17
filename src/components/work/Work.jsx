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
            <div className={style.back}>
                <Link to={'/'}>
                    <Button valor='Home' />
                </Link>
            </div>

            <section className={style.section}>
                <div>
                <div >
                        <a href='https://poke-app-three-bice.vercel.app/' target='_blank' className={style.child}>
                            <h2>Marvel-App</h2>
                        </a>
                        <p>Esta app fue la primera que realice con React Native es una app ludica con tematica en marvel, la misma permite visualizar el listado de personajes y sus respectivos detalles,y buscar por nombre. si bien es bastante sencilla me sirvio para reforzar un poco los conocimientos en react y tambien como primer acercamiento a react native</p>
                        <figure className={style.galery_img}>
                            <a href="https://poke-app-three-bice.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className={style.imgp} src={spidey3} />
                            <img className={style.imgp} src={spidey2} />
                            <img className={style.imgp} src={spidey1} />
                            </a>
                        </figure>
                    </div>
                    
                    <div >
                        <a href='https://poke-app-three-bice.vercel.app/' target='_blank' className={style.child}>
                            <h2>Pokemon-App</h2>
                        </a>
                        <p>Esta app fue la primera single page aplication que realice es una app ludica con tematica en pokemon, la misma permite visualizar el listado de personajes y sus respectivos detalles, tambien se puede filtrar , buscar por nombre y tambien crear tu propio personaje</p>
                        <figure className={style.galery_img}>
                            <a href="https://poke-app-three-bice.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className={style.images} src={pokemon} />
                            </a>
                        </figure>
                    </div>

                    <div >
                        <a href='https://planb-rho.vercel.app/' target='_blank' className={style.child}>
                            <h2>Shoes-Ecommerce</h2>
                        </a>
                        <p>plan-b es un ecommerce de calzados que desarrollamos con el equipo asignado para el proyecto final de henry conformado por 8 integrantes, la app cuenta con logueo por gmail o email, pasarela de pago utilizando mercadopago, listado y detalles de productos, carrito de compras, perfil de usuario , y tambien cuenta con la interfaz del administrador donde se puedo consultar y modificar productos agregar o quitar stock tambien se pueden ver las cantidades vendidas y canceladas, tambien permite ver a los usuarios registrados y hacer modificaciones como bannearlos o agregar rol de vendedor en caso de asi quererlo entre otras cosas</p>
                        <figure className={style.galery_img}>
                        <a href='https://planb-rho.vercel.app/' target='_blank' className={style.child}>
                            <img className={style.images} src={ecommerce1} />
                        </a>
                        </figure>
                    </div>



                    {/* <section className={style.galery}> */}


                    {/* 
                    <figure className={style.galery_img}>
                    <img className={style.images} src={ecommerce2} />
                    </figure>

                    <figure className={style.galery_img}>
                    <img className={style.images} src={ecommerce3} />
                    </figure>

                    <figure className={style.galery_img}>
                    <img className={style.images} src={ecommerce4} />
                    </figure>
                    
                    <figure className={style.galery_img}>
                    <img className={style.images} src={admin1} />
                    </figure>
                    
                    <figure className={style.galery_img}>
                    <img className={style.images} src={admin2} />
                    </figure>
                    
                    <figure className={style.galery_img}>
                    <img className={style.images} src={admin3} />
                    </figure>
                    
                    <figure className={style.galery_img}>
                    <img className={style.images} src={admin4} />
                    </figure>

                    <figure className={style.galery_img}>
                    <img className={style.images} src={admin5} />
                    </figure> */}

                    {/* </section> */}
                </div>
            </section>

        </div>
    )
}