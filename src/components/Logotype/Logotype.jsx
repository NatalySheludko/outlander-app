import { useNavigate } from "react-router-dom";
import css from "./Logotype.module.css";

export default function Logotype() {
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/");
  };

  return (
    <div className={css.logo} onClick={logoClick}>
      <img width="136" height="16" src="/public/images/Logo.png" alt="Logo" />
    </div>
  );
}

