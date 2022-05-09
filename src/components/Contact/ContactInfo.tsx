import { IInfoBox } from "../../types/InfoBox/InfoBox";
import InfoBox from "../InfoBox/InfoBox";

function ContactInfo() {
  const CONTACT_INFO_ITEM: IInfoBox[] = [
    {
      id: 1,
      icon: "pe-7s-mail-open-file",
      info: "info@topcuholding.com",
      infoLink: {
        link: "info@topcuholding.com",
        linkType: "mailto:",
        target: "",
      },
    },
    {
      id: 2,
      icon: "pe-7s-call",
      info: "+90 850 222 73 47",
      infoLink: {
        link: "+90 850 222 73 47",
        linkType: "tel:",
        target: "",
      },
    },
    {
      id: 3,
      icon: "pe-7s-global",
      info: "www.topcuholding.com",
      infoLink: {
        link: "https://www.topcuholding.com",
        linkType: "",
        target: "_blank",
      },
    },
    {
      id: 4,
      icon: "pe-7s-map-marker",
      info: "Abdurrahmangazi, İmamoğlu Sokak, Sancaktepe/İstanbul",
    },
  ];

  return (
    <>
      {CONTACT_INFO_ITEM.map((infoBox) => (
        <InfoBox key={infoBox.id} infoBox={infoBox} />
      ))}
    </>
  );
}

export default ContactInfo;
