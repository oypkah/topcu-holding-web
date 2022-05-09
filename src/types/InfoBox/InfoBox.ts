export interface IInfoBox {
  id: number;
  icon: string;
  info: string;
  infoLink?: IInfoBoxLink;
}

interface IInfoBoxLink {
  link: string;
  linkType: LinkType;
  target: TargetType;
}

type LinkType = "" | "mailto:" | "tel:";
type TargetType = "" | "_blank" | "_parent" | "_self" | "_top";
