import { IInput } from "../../types/Form/IInput";

function Input({ dataLabel, dataMessage, type, name, placeholder }: IInput) {
  return (
    <input
      className="form-control form-widget--form-control form-control-light"
      data-label={dataLabel}
      data-msg={dataMessage}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
export default Input;
