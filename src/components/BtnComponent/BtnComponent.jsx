import css from "./BtnComponent.module.css";

export default function BtnComponent({ onClick, children }) {
  return (
    <>
      <button className={css.btn} onClick={onClick}>
        {children}
      </button>
    </>
  );
}



