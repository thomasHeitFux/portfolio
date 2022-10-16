import style from './Card.module.css'
export default function Card({ img, techs, name, description, url, github }) {
    return (
        <section>
            <div className={style.card}>
                {Array.isArray(img) ? 
                
                        <figure >
                            <img className={style.imgp} src={img[0]} />
                            <img className={style.imgp} src={img[1]} />
                            <img className={style.imgp} src={img[2]} />
                        </figure>
                
                    : <figure >
                        <img className={style.images} src={img} />
                    </figure>}

                <p className={style.techs}>{techs}</p>

                <h2 className={style.child}>{name}</h2>

                <p className={style.text}>
                    {description}
                </p>
                <div className={style.links}>
                    <a className={style.icon} href={url} target='_blank' >
                        <ion-icon name="link-outline"></ion-icon>
                    </a>
                    <a className={style.icon} href={github} target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
            </div>

        </section>
    )
}