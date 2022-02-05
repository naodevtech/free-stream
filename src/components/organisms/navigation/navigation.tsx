import React from "react";
import { useNavigate } from "react-router";
import Logo from "../../../assets/logos/logo_freestream.svg";
import "./_navigation.scss";

const Nav = () => {
  let navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <nav className="p-1">
      <img
        className="logo"
        src={Logo}
        onClick={() => goToHomePage()}
        alt="logo"
      />
    </nav>
  );
};

export default Nav;
