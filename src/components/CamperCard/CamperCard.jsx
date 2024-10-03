import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  getCategories,
  capitalizeFirstLetter,
} from "../UtilsComponent/UtilsComponent";
import BtnComponent from "../BtnComponent/BtnComponent";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoMapOutline } from "react-icons/io5";
import css from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const categories = getCategories();

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? new Set(JSON.parse(savedFavorites)) : new Set();
  });

  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const handleReviewsClick = () => {
    navigate(`/catalog/${camper.id}/reviews`);
  };

  const toggleFavorite = (camperId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(camperId)) {
        newFavorites.delete(camperId);
      } else {
        newFavorites.add(camperId);
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(Array.from(newFavorites))
      );
      return newFavorites;
    });
  };

  return (
    <>
      <img
        className={css.img}
        src={camper.gallery[0]?.original}
        alt="Camper photo"
      />
      <div className={css.infoWrap}>
        <div className={css.nameWrap}>
          <h2 className={css.name}>{camper.name}</h2>
          <div className={css.priceWrap}>
            <p className={css.price}>
              &#8364;{parseFloat(camper.price).toFixed(2)}
            </p>
            <button
              className={css.btnHeart}
              onClick={() => toggleFavorite(camper.id)}
              style={{
                borderColor: favorites.has(camper.id) ? "#E44848" : "",
                borderWidth: favorites.has(camper.id) ? "1px" : "",
              }}
            >
              <FiHeart
                className={`${css.iconHeart} ${
                  favorites.has(camper.id) ? css.favorited : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className={css.reviewsWrap} onClick={handleReviewsClick}>
          <FaStar
            className={`${css.star} ${
              camper.reviews.length === 0 ? css.noReviews : ""
            }`}
          />
          <Link className={css.rating}>
            {camper.rating}({camper.reviews.length} Reviews)
          </Link>
          <IoMapOutline className={css.map} />
          <p className={css.location}>{camper.location}</p>
        </div>
        <div>
          <p className={css.description}>{camper.description}</p>
        </div>
        <ul className={css.categories}>
          {categories.map(({ name, label, icon }) => {
            if (camper[name] === true || camper[name] === label) {
              return (
                <li className={css.category} key={name + label}>
                  <span className={css.icon}>{icon}</span>
                  <span className={css.label}>
                    {capitalizeFirstLetter(label)}
                  </span>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <BtnComponent className={css.detailsBtn} onClick={handleViewNowClick}>
          Show more
        </BtnComponent>
      </div>
    </>
  );
}

