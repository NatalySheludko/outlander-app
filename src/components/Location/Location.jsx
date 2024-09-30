import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import { IoMapOutline } from "react-icons/io5";
import {
  StyledInputLabel,
  StyledSelect,
  Options,
  StyledPaper,
  CustomMenuItem,
} from "./Location.styled.jsx";
import { setCityFilter } from "../../redux/category/slice.js";
import { selectAllCampers } from "../../redux/catalog/selectors.js";
import { resetVisibleItems, applyFilters } from "../../redux/catalog/slice.js";
import css from "./Location.module.css";

export default function Location() {
  const [city, setCity] = useState("");
  const [uniqueLocations, setUniqueLocations] = useState([]);

  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    dispatch(resetVisibleItems());
    dispatch(setCityFilter(selectedCity));
    dispatch(
      applyFilters({
        equipment: [],
        vehicleType: [],
        city: selectedCity,
      })
    );
  };

  useEffect(() => {
    if (campers && campers.length > 0) {
      const locations = campers
        .map((camper) => camper.location)
        .filter(
          (location, index, arrayOfLocation) =>
            arrayOfLocation.indexOf(location) === index
        );

      setUniqueLocations(locations);
    }
  }, [campers]);

  return (
    <div className={css.wrap}>
      <FormControl fullWidth variant="outlined">
        <StyledInputLabel>Location</StyledInputLabel>
        <StyledSelect
          value={city}
          onChange={handleCityChange}
          displayEmpty
          MenuProps={{
            PaperProps: {
              component: StyledPaper,
            },
          }}
          input={
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <IoMapOutline
                    style={{ color: city ? "#101828" : "#6C717B" }}
                  />
                </InputAdornment>
              }
            />
          }
        >
          <CustomMenuItem value="" disabled>
            <span style={{ color: "#6C717B" }}>City</span>
          </CustomMenuItem>
          {uniqueLocations.map((location) => (
            <Options key={location} value={location}>
              {location}
            </Options>
          ))}
        </StyledSelect>
      </FormControl>
    </div>
  );
}

