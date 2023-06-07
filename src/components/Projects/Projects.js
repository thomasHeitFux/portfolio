import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/pokemon.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/spidey1.jpeg";
import chatify from "../../Assets/Projects/gorent.jpg";
import suicide from "../../Assets/Projects/weatherapp.png";
import bitsOfCode from "../../Assets/Projects/ecommerce1.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> */}
          <Col  className="project-card">
            <ProjectCard
              // imgPath={chatify}
              video='https://dms.licdn.com/playlist/vid/C4D05AQEp1stWyYq1yQ/mp4-720p-30fp-crf28/0/1670857038996?e=1686700800&v=beta&t=HtoA_ara6vebDydWLIFzrep7K7MntwaQY39aQBo9OAg'
              isBlog={false}
              title="Go rent"
              description="Go Rent is a mobile app that makes it easy to buy and rent and buy properties around the world. As simple as register and go for it!
              Go Rent trys to make it as easy as possible for users to search, allowing users to filter by location, property type, by price, find a location in the map.
              It also allows users to add to their favorites any property, and leave a review once rented or purchased."
              ghLink="https://github.com/thomasHeitFux/GoRent"
              demoLink="https://expo.dev/@txakur/go-rent?serviceType=classic&distribution=expo-go"
            />
          </Col>

          <Col  className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              videoId="qqY2AfDrIiU"
              title="Shoes - Ecommerce"
              description="Plan-B is an ecommerce that allows you to buy and sells sneakers. I was in charge of engineering both the front-end of the site and the back-end, designing some components, adding styles to others and contributing to the development of the back-end of the application."
              ghLink="https://github.com/txakurhub/pfinal_client"
              demoLink="https://www.youtube.com/watch?v=qqY2AfDrIiU"
            />
          </Col>

          <Col  className="project-card">
            <ProjectCard
              imgPath={editor}
              videoId="I_ChW6vNYpw"
              isBlog={false}
              title="Marvel App"
              description="Let the app display a card with Marvel characters information according to the data provided by the Marvel API, this was my first applications developed with react native. if you have expo go on your phone you can try it by yourself "
              ghLink="https://github.com/thomasHeitFux/Marvel-RN"
              demoLink="https://www.youtube.com/shorts/I_ChW6vNYpw"
            />
          </Col>

          <Col  className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pokemon-App"
              description="Single Page Application that displays pokemons brought through the use of an external API; the app is capable of paginating the results, sort them either by alphabetical order or rating, filter the results by creation type or genres, and much more."
              ghLink="https://github.com/thomasHeitFux/pokemon_front"
              demoLink="https://poke-app-three-bice.vercel.app/"
            />
          </Col>

          <Col  className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather-App"
              description="Search for a city located anywhere in the world and let the app display a card with its current weather information. With varying images and information according to the data brought by Open Weather API, this was one of my first apps, and recently got a little CSS update!."
              ghLink="https://github.com/thomasHeitFux/WeatherApp"
              demoLink="https://weatherapp-kappa-inky.vercel.app/"
            />
          </Col>
        {/* </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
