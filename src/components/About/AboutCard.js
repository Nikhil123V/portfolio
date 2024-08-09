import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          
            Hi Everyone, <br/>I am <span className="purple">Venkata Sai Nikhil Suddapalli,currently a final year B.Tech student at Veltech University.</span>
            
            
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "I aim to create websites that are easy to use and helpful to people."{" "}
          </p>
          <footer className="blockquote-footer">Venkata Sai Nikhil Suddapalli</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
