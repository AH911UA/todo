import "./button.scss";

function Button({ type =  "primary", txt, isSmall = false, handlerClick, datr = '' }) {
  

  return (
    <button
      className={`button button_${type} ${isSmall ? "button_small" : ""}`}
      onClick={handlerClick}
      data-datr={datr}
    >
      {txt}
    </button>
  );
}

export default Button;
