import React from "react";
import "../App.css";

const Header = () => {
  let logoUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={logoUrl} alt="pokeapi-logo" className="navbar-logo" />
        <p className="fs-5 text-muted">Testing PokeAPI</p>
      </div>
    </nav>
  );
};

export default Header;
