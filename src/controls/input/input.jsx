import "./input.scss";

function Input({ type, _theme, error, handlerInput, value }) {
  let theme = _theme || "inp_primary";

  switch (_theme) {
    case "error":
      theme = "inp_error";
      break;

    case "disabled":
      theme = "inp_disabled";
      break;

    default:
      break;   
  }

  return (
    <div className={theme}>
      <input type={type} 
        autoComplete="off" 
        value={value} 
        onChange={({target:{value}}) => handlerInput(value)}/>
      <p>{error}</p>
    </div>
  );
}

export default Input;
