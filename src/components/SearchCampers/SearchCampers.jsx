import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import clsx from "clsx";
import {
  setEquipmentFilter,
  setVehicleTypeFilter,
  applyFilters,
  resetVisibleItems,
} from "../../redux/catalog/slice.js";
import { selectFilters } from "../../redux/catalog/selectors.js";
import {
  capitalizeFirstLetter,
  getTypeFilters,
  getEquipmentFilters,
} from "../UtilsComponent/UtilsComponent";
import BtnComponent from "../BtnComponent/BtnComponent.jsx";
import css from "./SearchCampers.module.css";

export default function SearchCampers({ onSearch }) {
  const [selectedVehicleType, setSelectedVehicleType] = useState([]);

  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  const typeFilters = getTypeFilters();
  const equipmentFilters = getEquipmentFilters();

  const toggleFilter = (filter, type) => {
    if (type === "equipment") {
      dispatch(setEquipmentFilter(filter));
    } else {
      if (selectedVehicleType === filter) {
        setSelectedVehicleType(null);
        dispatch(setVehicleTypeFilter(filter));
      } else {
        setSelectedVehicleType(filter);
        dispatch(setVehicleTypeFilter(filter));
      }
    }
  };

  const handleSearchClick = () => {
    dispatch(resetVisibleItems());
    dispatch(applyFilters());
    onSearch();
  };

  return (
    <div>
      <p className={css.text}>Filters</p>
      <h2 className={css.title}>Vehicle Equipment</h2>
      <div className={css.filtersWrap}>
        {equipmentFilters.map(({ name, label, icon }) => (
          <button
            className={clsx(css.filterBtn, {
              [css.selected]: filters.equipment.includes(name),
            })}
            key={name}
            onClick={() => toggleFilter(name, "equipment")}
          >
            <span className={css.icon}>{icon}</span>
            <span className={css.label}>{capitalizeFirstLetter(label)}</span>
          </button>
        ))}
      </div>

      <h2 className={css.title}>Vehicle Type</h2>
      <div className={css.filtersWrap}>
        {typeFilters.map(({ name, label, icon }) => (
          <button
            className={clsx(css.filterBtn, {
              [css.selected]: filters.vehicleType.includes(name),
            })}
            key={name}
            onClick={() => toggleFilter(name, "vehicleType")}
          >
            <span className={css.icon}>{icon}</span>
            <span className={css.label}>{capitalizeFirstLetter(label)}</span>
          </button>
        ))}
      </div>

      <BtnComponent onClick={handleSearchClick}>Search</BtnComponent>
    </div>
  );
}

