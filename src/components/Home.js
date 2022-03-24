import React from "react";
import { name, city } from "../data/data.js";

const fire = {
  WebkitTransition: 'all',
  msTransition: 'all',
  color: 'firebrick'
}

function Home() {
  return (
    <div id="home">
      <h1 style={fire}>
      {name} is a Web Developer from {city}
      </h1>
    </div>
  )
};

export default Home;
