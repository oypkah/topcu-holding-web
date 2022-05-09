import { IFormInput } from "./IFormInput";

export interface IInput extends IFormInput {
  dataLabel?: string;
  dataMessage?: string;
  placeholder: string;
}
