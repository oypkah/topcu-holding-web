import { IFormGroup } from "../../types/Form/FormGroup";

function FormGroup({ icon, children }: IFormGroup) {
  return (
    <div className="form-group">
      <span className="form-widget--icon flex-cc txt-default">
        <i className={icon} />
      </span>
      {children}
    </div>
  );
}

export default FormGroup;
