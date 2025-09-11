import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Live Math Score Predictor"
              description="A simple Streamlit app that predicts a student's **math score** based on their demographics and other scores. The model is trained **live** on each run (no pickle files used)."
              ghLink="https://github.com/Moondancerr/Prediction"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-Time Company Valuation App (Streamlit)"
              description="An interactive Streamlit app to estimate a company's fair market value using both Discounted Cash Flow (DCF) analysis and Comparable Company Valuation (EV/EBITDA multiple) — all in real-time based on user inputs."
              ghLink="https://github.com/Moondancerr/valuation"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="tic-tac-toe-GAME"
              description="A simple Tic Tac Toe game implemented in Python for the console and in HTML/CSS/JavaScript for the browser."
              ghLink="https://github.com/Moondancerr/tic-tac-toe-GAME"
              demoLink="https://moondancerr.github.io/tic-tac-toe-GAME/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Internet History"
              description="This is a simple Node.js web application built using **Express.js** and **Handlebars**. The app displays key milestones in the history of the Internet, rendered dynamically based on user selection."
              ghLink="https://github.com/Moondancerr/internet-history"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="top-movies-imbd"
              description="A simple Python script to scrape the Top 250 movies from IMDb and export the data to an Excel file."
              ghLink="https://github.com/Moondancerr/top-movies-imbd"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            /> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
