import React from 'react';
import style from "./Work.module.css";
import ecommerce1 from '../../images/ecommerce1.jpeg'
import pokemon from '../../images/pokemon.png'
import spidey1 from '../../images/spidey1.jpeg'
import spidey2 from '../../images/spidey2.jpeg'
import spidey3 from '../../images/spidey3.jpeg'
import Button from '../mini-components/button';
import disney from '../../images/DisneyBs.png'
import globe from '../../images/globe.png'
import weather from '../../images/weatherapp.png'
import { Link } from "react-router-dom"
import Card from '../mini-components/Card';

export default function Work() {
    return (
        <div className={style.container}>
            <Link to={'/'}>
                <Button valor='Home' />
            </Link>

            <h2 className={style.title}>Some of My Work</h2>
            <section className={style.section}>
{/* Globe */}
                <Card
                 img={globe}
                 techs={'D3 JavaScript Css Html'}
                 name={'Globe app'}
                 description={' Search for a Country and let the app display info. about that country selected according to the data provided by the GeoJson API, this was my first applications developed with D3 js.'}
                 url='https://globe-nine.vercel.app/'
                 github='https://github.com/thomasHeitFux/Globe-D3'
                />

           
{/* DISNEY */}
                <Card
                    img={disney}
                    techs={'React  Redux  Typescript Bootstrap'}
                    name={'Disney app'}
                    description={'Search for a character from the Diseney world and let the app display a card with their information. With different images and information according to the data provided by the Disney API, this was one of my first applications developed with Typescript'}
                    url='https://diney-ts.vercel.app/'
                    github='https://github.com/thomasHeitFux/Diney-ts'
                />
{/* SHOES */}
                <Card
                    img={ecommerce1}
                    techs={'React  Redux  TailwindCss Node.js'}
                    name={'Shoes - Ecommerce'}
                    description={'Plan-B is an ecommerce that allows you to buyand sells neakers .I was in charge of engineering both the front-end of the site and the back-end, designing some components, adding styles to others and contributing to the development of the back-end of the application.sas'}
                    url='https://planb-rho.vercel.app/'
                    github='https://github.com/txakurhub/pfinal_client'
                />
{/* MARVEL */}

                <Card
                    img={[spidey3,spidey2,spidey1]}
                    techs={'React  Redux  TailwindCss Node.js'}
                    name={'Shoes - Ecommerce'}
                    description={'Plan-B is an ecommerce that allows you to buyand sells neakers .I was in charge of engineering both the front-end of the site and the back-end, designing some components, adding styles to others and contributing to the development of the back-end of the application.sas'}
                    url='https://planb-rho.vercel.app/'
                    github='https://github.com/txakurhub/pfinal_client'
                />  

{/* POKEMON */}
                <Card 
                 img={pokemon}
                 techs={'React Redux Node.js Express'}
                 name={'Pokemon-App'}
                 description={' Single Page Application that displays pokemons brought through the use of an external API; the app is capable of paginating the results, sort them either by alphabetical order or rating, filter the results by creation type or genres, and much more.'}
                 url='https://poke-app-three-bice.vercel.app/'
                 github='https://github.com/thomasHeitFux/pokemon_front'
                />
             
{/* weatherapp */}
                <Card 
                 img={weather}
                 techs={'React  Bootstrap Sass OpenWeather Api'}
                 name={'Weather-App'}
                 description={' Search for a city located anywhere in the world and let the app display a card with its current weather information. With varying images and information according to the data brought by Open Weather API, this was one of my first apps, and recently got a little CSS update!'}
                 url='https://weatherapp-kappa-inky.vercel.app/'
                 github='https://github.com/thomasHeitFux/WeatherApp'
                />
            </section>

        </div>
    )
}