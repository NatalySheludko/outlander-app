import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/catalog/operations.js";
import { selectSelectedCamper } from "../../redux/catalog/selectors.js";
import Avatar from "@mui/material/Avatar";
import {
  stringAvatar,
  renderStars,
} from "../../components/UtilsComponent/UtilsComponent";
import CatalogForm from "../../components/CatalogForm/CatalogForm.jsx";
import css from "./ReviewsPage.module.css";

export default function ReviewsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector(selectSelectedCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <div className={css.container}>
      {selectedCamper !== null && (
        <>
          <div className={css.reviewWrap}>
            <ul className={css.reviews}>
              {selectedCamper.reviews.map((review, index) => (
                <li className={css.review} key={review.id || index}>
                  <div className={css.nameWrap}>
                    <span>
                      <Avatar {...stringAvatar(review.reviewer_name)} />
                    </span>
                    <div>
                      <p className={css.name}>{review.reviewer_name}</p>
                      <div className={css.starsWrap}>
                        {renderStars(review.reviewer_rating)}
                      </div>
                    </div>
                  </div>

                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div>
        <CatalogForm />
      </div>
    </div>
  );
}



