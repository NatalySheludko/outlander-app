import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/catalog/operations.js";
import { selectSelectedCamper } from "../../redux/catalog/selectors.js";
import { FaStar } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import css from "./CamperCardDetails.module.css";

export default function CamperCardDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedCamper = useSelector(selectSelectedCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const handleReviewsClick = () => {
    if (selectedCamper) {
      navigate(`/catalog/${selectedCamper.id}/reviews`);
    }
  };

  return (
    <div className={css.container}>
      {selectedCamper !== null && (
        <>
          <h2 className={css.name}>{selectedCamper.name}</h2>
          <div className={css.reviewsWrap} onClick={handleReviewsClick}>
            <FaStar
              className={`${css.star} ${
                selectedCamper.reviews.length === 0 ? css.noReviews : ""
              }`}
            />
            <Link className={css.rating}>
              {selectedCamper.rating}({selectedCamper.reviews.length} Reviews)
            </Link>
            <IoMapOutline className={css.map} />
            <p className={css.location}>{selectedCamper.location}</p>
          </div>
          <p className={css.price}>
            &#8364;{parseFloat(selectedCamper.price).toFixed(2)}
          </p>
          <ul className={css.imgWrap}>
            {selectedCamper.gallery.map((image, index) => (
              <li key={index} className={css.imageItem}>
                <img
                  src={image.original}
                  alt={`Camper ${index + 1}`}
                  className={css.img}
                />
              </li>
            ))}
          </ul>
          <p className={css.description}>{selectedCamper.description}</p>
        </>
      )}
    </div>
  );
}


