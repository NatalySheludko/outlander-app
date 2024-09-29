import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/catalog/operations.js";
import {
  loadMore,
  setCityFilter,
	applyFilters,
	resetVisibleItems,
} from "../../redux/catalog/slice.js";
import {
  selectTotalCampers,
  selectCampers,
} from "../../redux/catalog/selectors.js";
import Location from "../../components/Location/Location.jsx";
import SearchCampers from "../../components/SearchCampers/SearchCampers.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [city, setCity] = useState("");
  const [searchApplied, setSearchApplied] = useState(false);

  const dispatch = useDispatch();

  const totalCampers = useSelector(selectTotalCampers);
  const visibleItems = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleSearch = () => {
    setSearchApplied(true);
    dispatch(applyFilters());
  };

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
		setCity(selectedCity);
		dispatch(resetVisibleItems());
		dispatch(setCityFilter(selectedCity));
		dispatch(applyFilters());
  };

  return (
    <div className={css.container}>
      <div>
        <Location selectedCity={city} handleCityChange={handleCityChange} />
        <SearchCampers onSearch={handleSearch} />
      </div>

      <div>
        {searchApplied && visibleItems.length === 0 ? (
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

        {!searchApplied && visibleItems.length < totalCampers && (
          <button className={css.btn} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}






