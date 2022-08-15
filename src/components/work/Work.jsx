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

export default function Work() {
    return (
        <div className={style.container}>
            {/* <a href='https://poke-app-three-bice.vercel.app/' target='_blank' className={style.child}>Pokemon-App</a> */}
            <a className={style.child}>Marvel-App</a>
            <a href='https://planb-rho.vercel.app/' target='_blank' className={style.child}>Shoes-Ecommerce</a>
            <section className={style.section}>
                <div class="content">
                    <div class="inner">
                        <a href='https://poke-app-three-bice.vercel.app/' target='_blank' className={style.child}>
                            <h2>Pokemon-App</h2>
                        </a>
                        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    </div>

                    <section className={style.galery}>

                    <figure className={style.galery_img}>
                    <img className={style.images} src={ecommerce1} />
                    </figure>

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
                    </figure>
                    
                    </section>
                </div>
            </section>

        </div>
    )
}