import React from "react";
import { image } from "../data/data";

const Header2 = () => {
  return (
    <h2>About Me</h2>
  );
};

const Paragraph = () => {
  return (
    <p>Hello, this is a test paragraph</p>
  );
};

const Image = () => {
  return (
    <img alt="I made this" src={image}></img>
  );
}



function About() {
  return (
    <div id="about">
      <Header2 />
      <Paragraph />
      <Image />
    </div>
  );
}

export default About;
