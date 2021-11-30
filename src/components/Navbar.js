import React from "react";
import "../App.css";

const Navbar = () => {
  let logoUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={logoUrl} alt="pokeapi-logo" className="navbar-logo" />
        <p>Testing PokeAPI</p>
      </div>
    </nav>
  );
};

export default Navbar;
