import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/catalog/operations.js";
import { loadMore } from "../../redux/catalog/slice.js";
import {
  selectCampers,
  selectTotalCampers,
} from "../../redux/catalog/selectors.js";
import Location from "../../components/Location/Location.jsx";
import SearchCampers from "../../components/SearchCampers/SearchCampers.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const totalCampers = useSelector(selectTotalCampers);
  const visibleItems = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div className={css.container}>
      <div>
        <Location />
        <SearchCampers />
      </div>

      <div>
        {visibleItems.length === 0 ? (
          <p className={css.text}>No matches found</p>
        ) : (
          <ul className={css.cardWrap}>
            {visibleItems.map((camper) => (
              <li className={css.card} key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
        )}

        {visibleItems.length < totalCampers && (
          <button className={css.btn} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

