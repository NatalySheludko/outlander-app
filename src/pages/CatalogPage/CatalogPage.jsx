import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/catalog/operations.js";
import { selectCampers } from "../../redux/catalog/selectors.js";
import Location from "../../components/Location/Location.jsx";
import SearchCampers from "../../components/SearchCampers/SearchCampers.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
	const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const visibleItems = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
	}, [dispatch]);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    dispatch(setCityFilter(selectedCity));
  };

  return (
    <div className={css.container}>
      <div>
        <Location selectedCity={city} handleCityChange={handleCityChange} />
        <SearchCampers />
      </div>

      <div>
        { visibleItems.length === 0 ? (
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

        {/* {visibleItems.length < totalCampers && (
          <button className={css.btn} onClick={() => dispatch(loadMore())}>
            Load More
          </button>
        )} */}
      </div>
    </div>
  );
}










