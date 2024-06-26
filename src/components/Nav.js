import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsapNav } from "../scripts/gsapEffects";
import { navResponsive } from "../scripts/navResponsive";
import NavBtn from "./NavBtn";
import { useLayoutEffect } from "react";

function Nav() {
  useEffect(() => {
    navResponsive();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsapNav();
    return () => ctx.revert();
  }, []);

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-logo">
          <NavBtn />
          <Link className="nav-item logo" to="/">
            <h1 className="text-shadow">{"< Jaime JB />"}</h1>
          </Link>
        </div>
        <ul className="nav-ul nav-ul--focus">
          <Link className="nav-item btn btn-primary text-shadow" to="aboutme">
            Sobre mí
          </Link>
          <Link className="nav-item btn btn-primary text-shadow" to="proyects">
            Proyectos
          </Link>
          <Link className="nav-item btn btn-primary text-shadow" to="skills">
            Skills
          </Link>
          <Link className="nav-item btn btn-primary text-shadow" to="contact">
            Contáctame
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
