import React from 'react';
import style from "./Contact.module.css";
import { Link } from "react-router-dom"
import Button from '../mini-components/button';


export default function Contact() {
    return (
        <div className={style.container}>
            
            <Link to={'/'}>
                <Button valor='Home'  />
            </Link>

            <h2 className={style.title}>Contact</h2>
            <section className={style.paragraph}>
                <p >Busco oportunidades para colaborar con empresas/agencias/individuos, no solo trabajar para ellos. Quiero traer mi experiencia de diseño colectivo a la mesa donde podamos trabajar juntos para resolver problemas comerciales reales de una manera que optimice toda nuestra experiencia y conocimiento respectivos.
                </p>
                <p>
                    Quiero evitar conflictos sin sentido y favorecer a los colaboradores de mente abierta donde los egos están fuera de la ecuación.
                    Si todo eso suena bien, entonces conversemos sobre cómo podemos trabajar juntos.
                </p>
                <p>
                    No dude en comunicarse a través de cualquiera de las plataformas a continuación:
                </p>
            </section>
            <div >
                <a href='https://www.linkedin.com/in/dominguezthomas/' target={'_blank'} className={style.animate}>Linkedin</a>
                <a href='https://github.com/thomasHeitFux/' target={'_blank'} className={style.animate}>Github</a>
            </div>
            <form method="post" action="#">
                <div className={style.father}>
                    <div className={style.div1}><input type="text" name="name" placeholder="Name" /></div>
                    <div className={style.div2}><input type="text" name="email" placeholder="Email" /></div>
                </div>
                <div className={style.father2}>
                    <div className={style.div3}>
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className={style.div4}>
                        <input type="submit" value="Send Message" />
                    </div>

                </div>
            </form>
        </div>
    )
}