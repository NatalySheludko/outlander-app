import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logotype from "../Logotype/Logotype";
import css from "./Header.module.css";

export default function Header() {
  function getClassActiveLink({ isActive }) {
    const excludedPaths = [
      "/catalog/:id",
      "/catalog/:id/reviews",
      "/catalog/:id/features",
    ];

    const isExcluded = excludedPaths.some((path) =>
      location.pathname.match(new RegExp(path.replace(":id", "\\d+")))
    );

    return clsx(css.link, isActive && !isExcluded && css.active);
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

