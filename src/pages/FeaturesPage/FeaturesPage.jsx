import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/catalog/operations.js";
import { selectSelectedCamper } from "../../redux/catalog/selectors.js";
import CatalogForm from "../../components/CatalogForm/CatalogForm.jsx";
import {
  capitalizeFirstLetter,
  getCategories,
} from "../../components/UtilsComponent/UtilsComponent";
import css from "./FeaturesPage.module.css";

export default function FeaturePage() {
  const categories = getCategories();

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
          <div className={css.featureWrap}>
            <ul className={css.categories}>
              {categories.map(({ name, label, icon }) => {
                if (
                  selectedCamper[name] === true ||
                  selectedCamper[name] === label
                ) {
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
            <h2 className={css.title}>Vehicle details</h2>
            <ul className={css.detailsWrap}>
              <li className={css.details}>
                <p className={css.text}>Form</p>
                <span className={css.value}>
                  {capitalizeFirstLetter(selectedCamper.form)}
                </span>
              </li>
              <li className={css.details}>
                <p className={css.text}>Length</p>
                <span className={css.value}>{selectedCamper.length}</span>
              </li>
              <li className={css.details}>
                <p className={css.text}>Width</p>
                <span className={css.value}>{selectedCamper.width}</span>
              </li>
              <li className={css.details}>
                <p className={css.text}>Height</p>
                <span className={css.value}>{selectedCamper.height}</span>
              </li>
              <li className={css.details}>
                <p className={css.text}>Tank</p>
                <span className={css.value}>{selectedCamper.tank}</span>
              </li>
              <li className={css.details}>
                <p className={css.text}>Consumption</p>
                <span className={css.value}>{selectedCamper.consumption}</span>
              </li>
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

