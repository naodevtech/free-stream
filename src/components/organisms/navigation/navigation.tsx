import React from "react";
import Logo from "../../../assets/logos/logo_freestream.svg";
import "./_navigation.scss";

const Nav = () => {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />
    </nav>
  );
};

export default Nav;
