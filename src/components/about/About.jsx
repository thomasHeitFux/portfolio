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
                <p >Hi, I’m Thomas. I'm full stack developer  with 1 year of experience working on academic and own proyects.
                </p>
                <p>
                    I don’t like to define myself by the work I’ve done. I define myself by the work I want to do.  I want to keep learning, continue challenging myself, and do interesting things that matter
                </p>
                <p>
                    I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTJ.
                </p>
            </div>
        </div>
    )
}