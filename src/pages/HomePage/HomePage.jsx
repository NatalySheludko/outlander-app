import { useNavigate } from "react-router-dom";
import BtnComponent from "../../components/BtnComponent/BtnComponent";
import css from "./HomePage.module.css";


export default function HomePage() {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.container}>
      <div className={css.background}></div>
      <div className={css.wrap}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.info}>
          You can find everything you want in our catalog
        </p>
        <BtnComponent onClick={handleViewNowClick}> View Now</BtnComponent>
      </div>
    </div>
  );
}


