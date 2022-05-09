import { ITextarea } from "../../types/Form/ITextarea";

function Textarea({
  dataLabel,
  dataMessage,
  name,
  placeholder,
  cols,
  rows,
  minLength,
  defaultValue,
}: ITextarea) {
  return (
    <textarea
      className="form-control form-widget--form-control form-control-light"
      data-label={dataLabel}
      data-msg={dataMessage}
      name={name}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      minLength={minLength}
      defaultValue={defaultValue}
    />
  );
}
export default Textarea;
