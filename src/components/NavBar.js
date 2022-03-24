import React from "react";

const HomeLink = () => {
  return (
    <a href="#home">Home</a>
  );
};

const AboutLink = () => {
  return (
    <a href="#about">About</a>
  );
};

function NavBar() {
  return (
    <nav>
      <HomeLink />
      <AboutLink />
    </nav>
  );
}

export default NavBar;
