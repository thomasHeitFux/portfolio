import React from 'react';
import style from "./contact.module.css";
import { Link } from "react-router-dom"
import Button from '../mini-components/button';
import cv from '../../resume/resume.docx'
import {useState} from 'react'

export default function Contact() {
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
        <div className={style.container}>
            <section className={style.back}>
                <Link to={'/'}>
                    <Button valor='Home' />
                </Link>
            </section>

        <article>
 <div className={style.icons}>

                <section>
                        <a href='https://github.com/thomasHeitFux/' target={'_blank'}>
                    <div>
                            <ion-icon name="logo-github"></ion-icon>
                        <p>/thomasHeitFux</p>
                    </div>
                        </a>
                        <a href='https://www.linkedin.com/in/dominguezthomas/' target={'_blank'}>
                    <div>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        <p>/dominguezthomas</p>
                    </div>
                        </a>
              
                        <a className={style.mail} onClick={(e) => { handleCopy(e) }}>
                    <div>
                        <ion-icon name="mail-outline"></ion-icon>
                        <p>thomas41392@gmail.com</p>
                    </div>
                        <span className={style.copied} style={toggle ? { opacity: 1 } : { opacity: 0 }}>Copied!</span>
                        </a>
                      
                        <a href={cv} target={'_blank'} download="cv.docx">
                    <div>
                            <ion-icon name="document-attach-outline"></ion-icon>
                        <p>resume</p>
                        
                    </div>
                        </a>
                </section>

            </div>
        </article>
           
        </div>
    )
}