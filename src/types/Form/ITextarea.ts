import { IFormInput } from "./IFormInput";

export interface ITextarea extends IFormInput {
  dataLabel?: string;
  dataMessage?: string;
  placeholder: string;
  cols?: number;
  rows?: number;
  minLength?: number;
  defaultValue: string;
}
