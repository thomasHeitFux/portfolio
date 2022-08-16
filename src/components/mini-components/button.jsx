import React from 'react';
import style from "./button.module.css";



export default function Button(props) {
    return (
        <button className={style.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.valor}
            {/* Boton */}
        </button>
    )
}