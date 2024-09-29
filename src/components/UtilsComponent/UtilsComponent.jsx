import { FaStar } from "react-icons/fa";
import {
  BsDiagram3,
  BsCupHot,
  BsWind,
  BsFuelPump,
  BsDroplet,
  BsUiRadios,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import css from "./UtilsComponent.module.css";

export const renderStars = (rating) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`${css.star} ${
          i <= rating ? css.activeStar : css.inactiveStar
        }`}
      />
    );
  }

  return stars;
};

export const getCategories = () => {
  return [
    { name: "AC", label: "AC", icon: <BsWind /> },
    { name: "transmission", label: "automatic", icon: <BsDiagram3 /> },
    { name: "transmission", label: "manual", icon: <BsDiagram3 /> },
    { name: "kitchen", label: "kitchen", icon: <BsCupHot /> },
    { name: "engine", label: "diesel", icon: <BsFuelPump /> },
    { name: "engine", label: "petrol", icon: <BsFuelPump /> },
    { name: "bathroom", label: "Bathroom", icon: <BsDroplet /> },
    { name: "TV", label: "TV", icon: <HiOutlineTv /> },
    { name: "radio", label: "radio", icon: <BsUiRadios /> },
    { name: "refrigerator", label: "refrigerator", icon: <TbFridge /> },
    { name: "microwave", label: "microwave", icon: <LuMicrowave /> },
    { name: "gas", label: "gas", icon: <BsFuelPump /> },
    { name: "water", label: "water", icon: <BsDroplet /> },
  ];
};

export const getEquipmentFilters = () => {
  return [
    { name: "AC", label: "AC", icon: <BsWind /> },
    { name: "automatic", label: "Automatic", icon: <BsDiagram3 /> },
    { name: "kitchen", label: "Kitchen", icon: <BsCupHot /> },
    { name: "TV", label: "TV", icon: <HiOutlineTv /> },
    { name: "bathroom", label: "Bathroom", icon: <BsDroplet /> },
  ];
};

export const getTypeFilters = () => {
  return [
    {
      name: "panelTruck",
      label: "Van",
      icon: <BsGrid1X2 />,
    },
    {
      name: "fullyIntegrated",
      label: "Fully Integrated",
      icon: <BsGrid />,
    },
    {
      name: "alcove",
      label: "Alcove",
      icon: <BsGrid3X3Gap />,
    },
  ];
};

export function stringAvatar(name) {
  const nameParts = name.split(" ");
  let initials = "";

  initials = `${nameParts[0][0]}`.toUpperCase();

  return {
    sx: {
      bgcolor: "#F2F4F7",
      width: "60px",
      height: "60px",
      borderRadius: "60px",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "1.33",
      color: "#E44848",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "16px",
    },
    children: initials,
  };
}

export const capitalizeFirstLetter = (string) => {
  if (typeof string !== "string" || string.length === 0) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

