import { NavLink, useParams, Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { fetchCamperById } from "../../redux/catalog/operations.js";
import Loader from "../../components/Loader/Loader";
import css from "./DetailsNavigation.module.css";

export default function DetailsNavigation() {
  const { id } = useParams();
  const dispatch = useDispatch();

  function getClassActiveLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <>
      <nav className={css.navigation}>
        <ul className={css.wrap}>
          <li className={css.list}>
            <NavLink
              className={getClassActiveLink}
              to={`/catalog/${id}/features`}
            >
              <p className={css.text}>Features</p>
            </NavLink>
          </li>

          <li className={css.list}>
            <NavLink
              className={getClassActiveLink}
              to={`/catalog/${id}/reviews`}
            >
              <p className={css.text}>Reviews</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

