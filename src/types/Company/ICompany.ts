import { IInfoBox } from "../InfoBox/InfoBox";

export interface ICompany {
  id: number;
  title: string;
  subTitle: string;
  imgSrc: string;
  companyInfos: IInfoBox[];
  // phoneNumber: string;
  // email: string;
  // webSite: string;
  // address: string;
  // addressGoogleMapsLink?: string;
}
