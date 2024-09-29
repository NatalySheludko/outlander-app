import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logotype from "../Logotype/Logotype";
import css from "./Header.module.css";

export default function Header() {
  function getClassActiveLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <>
      <nav className={css.navigation}>
        <Logotype />
        <ul className={css.navWrap}>
          <li className={css.link}>
            <NavLink to="/" className={getClassActiveLink}>
              Home
            </NavLink>
          </li>
          <li className={css.link}>
            <NavLink to="/catalog" className={getClassActiveLink}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

