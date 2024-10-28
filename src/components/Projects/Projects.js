import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Iphone15 from "../../Assets/Projects/p4.svg";
import Food_app from "../../Assets/Projects/pro2.png";
import ImageAI from "../../Assets/Projects/p3.svg";
import connecthub from "../../Assets/Projects/connecthub.svg";
import ChatGaint from "../../Assets/Projects/pro1.png";
import HooBank from "../../Assets/Projects/bank_app.png";
import ShopDrop from "../../Assets/ShopDrop.png";
import LiveDocs from "../../Assets/LiveDocs.png";
import event from "../../Assets/Projects/event.png";
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
              imgPath={connecthub}
              isBlog={false}
              title="ConnectHub"
              description=" Connecthub is indeed a valuable tool for conducting online meetings, classes, and collaborative sessions.
              Leveraging the power of Next.js, TypeScript, Clerk, getstream, shadcn, and Tailwind CSS, the platform offers a
              robust and efficient solution for virtual interactions."
              
              ghLink="https://github.com/Nikhil123V/ConnectHub"
              demoLink="https://connect-hub-jxr2.vercel.app/"
            />
                 </Col>
                
                <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LiveDocs}
              isBlog={false}
              title="LiveDocs"
              description="LiveDocs, a real-time collaborative text editor, showcases the developer's proficiency in building interactive web applications. Leveraging the power of Next.js for UI, Liveblocks for real-time features, and Tailwind CSS for styling, LiveDocs offers a seamless Google Docs-like experience. With features like authentication, collaborative editing, document management, commenting, and notifications, users can efficiently work together on shared documents. The application's responsive design ensures a smooth experience across devices. Join the active Discord community for support and collaboration as you explore the potential of LiveDocs."
              
              ghLink="https://github.com/Nikhil123V/LiveDocs"
              demoLink="/"
            />
                 </Col>

  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Festivo"
              description="Festivo is a web application built using Next.js, Tailwind CSS, and TypeScript. It enables users to list event tickets, including details such as location, price, and purchase options. Clerk ensures secure user authentication, while Stripe facilitates seamless payment processing."
              ghLink="https://github.com/Nikhil123V/festivo"        
            />
          </Col>

                
                 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageAI}
              isBlog={false}
              title="Ai Saas application"
              description="Developed a robust AI-driven image transformation SaaS application. Leveraged Next.js, TypeScript, and Tailwind
CSS to build a scalable and user-friendly platform. Implemented seamless image uploads, processing, and AIgenerated transformations using Cloudinary.
Integrated Clerk for secure user authentication and management. Successfully deployed the application, demonstrating proficiency in full-stack development and AI integration."
              ghLink="https://github.com/Nikhil123V/imagify"        
            />
          </Col>
                 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShopDrop}
              title="ShopDrop"
              isBlog={false}
              description="I developed ShopDrop, an online platform that offers a curated selection of authentic branded products at affordable prices. Using React.js, Tailwind CSS, and JavaScript, I created a user-friendly interface that allows customers to easily browse and purchase their desired items. My work on this project showcased my ability to build scalable and efficient web applications while delivering a seamless shopping experience."
              ghLink="https://github.com/Nikhil123V/ShopDrop"
              demoLink="https://shop-drop-j7zj.vercel.app/"
            />
                
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HooBank}
              isBlog={false}
              title="HooBank"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Iphone15}
              isBlog={false}
              title="Apple 15Pro Clone"
              description="Developed a highly interactive Apple iPhone 15 Pro clone website, leveraging React for the frontend. Three.js for
3D elements, GSAP for animations, and Tailwind CSS for styling.
.This project significantly enhanced my proficiency in creating immersive and engaging user experiences.
"
              ghLink="https://github.com/Nikhil123V/apple_15pro_website"
              demoLink="https://apple-15pro-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatGaint}
              isBlog={false}
              title="ChatGaint(AI)"
              description="Developed a ChatGPT-powered AI chatbot application using HTML, CSS, JavaScript, and the OpenAI API. The project involved creating a user-friendly interface and seamlessly integrating the ChatGPT API to enable real-time, interactive conversations."
              demoLink='https://chatgaint.ccbp.tech/'     
                   />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food_app}
              isBlog={false}
              title="FeastFinder"
              description="Developed FeastFinder, a food delivery and restaurant search app, utilizing a tech stack comprising Google APIs,
HTML, CSS, and Bootstrap.
The app facilitates efficient restaurant discovery, enabling users to easily search for nearby dining options and order
food for delivery.
"
              ghLink=""
              demoLink="https://foodxp.ccbp.tech/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
