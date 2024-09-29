import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import { IoMapOutline } from "react-icons/io5";
import {
  StyledInputLabel,
  StyledSelect,
  Options,
  StyledPaper,
  CustomMenuItem,
} from "./Location.styled.jsx";
import { selectAllCampers } from "../../redux/catalog/selectors.js";
import css from "./Location.module.css";

export default function Location({ selectedCity, handleCityChange }) {
  const campers = useSelector(selectAllCampers);

  const [uniqueLocations, setUniqueLocations] = useState([]);

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
        <StyledInputLabel selected={selectedCity}>Location</StyledInputLabel>
        <StyledSelect
          value={selectedCity}
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
                    style={{ color: selectedCity ? "#101828" : "#6C717B" }}
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

