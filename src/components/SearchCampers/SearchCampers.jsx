import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import clsx from "clsx";
import { resetVisibleItems, applyFilters } from "../../redux/catalog/slice.js";
import { setCategoryFilter } from "../../redux/category/slice.js";
import { selectCategories } from "../../redux/category/selectors.js";
import {
  capitalizeFirstLetter,
  getTypeFilters,
  getEquipmentFilters,
} from "../UtilsComponent/UtilsComponent";
import BtnComponent from "../BtnComponent/BtnComponent.jsx";
import css from "./SearchCampers.module.css";

export default function SearchCampers() {
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);

  const dispatch = useDispatch();

  const filters = useSelector(selectCategories);

  const typeFilters = getTypeFilters();
  const equipmentFilters = getEquipmentFilters();

  const toggleFilter = (filter, type) => {
    if (type === "equipment" || type === "vehicleType") {
      dispatch(setCategoryFilter({ type, value: filter }));
    }

    if (type === "vehicleType") {
      if (selectedVehicleType === filter) {
        setSelectedVehicleType(null);
      } else {
        setSelectedVehicleType(filter);
      }
    }

    dispatch(
      applyFilters({
        equipment: filters.equipment,
        vehicleType: selectedVehicleType ? [selectedVehicleType] : [],
        city: filters.city,
      })
    );
  };

  const handleSearchClick = () => {
    dispatch(resetVisibleItems());
    dispatch(
      applyFilters({
        equipment: filters.equipment,
        vehicleType: selectedVehicleType ? [selectedVehicleType] : [],
        city: filters.city,
      })
    );
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
          <label
            key={name}
            className={`${css.radioLabel} ${css.filterBtn} ${
              selectedVehicleType === name ? css.selected : ""
            }`}
          >
            <input
              type="radio"
              name="vehicleType"
              value={name}
              checked={selectedVehicleType === name}
              onChange={() => toggleFilter(name, "vehicleType")}
              className={css.radioInput}
            />
            <span className={css.icon}>{icon}</span>
            <span className={css.label}>{capitalizeFirstLetter(label)}</span>
          </label>
        ))}
      </div>

      <BtnComponent onClick={handleSearchClick}>Search</BtnComponent>
    </div>
  );
}

