import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import changeTitle from "../../helpers/changeTitle";
import { ICompany } from "../../types/Company/ICompany";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import CompanyCard from "./CompanyCard";

function GroupCompanies(props: any) {
  const { t } = useTranslation();

  const COMPANIES: ICompany[] = [
    {
      id: 1,
      title: "REİS MAKİNA",
      subTitle: "Ticaret ve Sanayi A.Ş.",
      imgSrc: "/images/Reis-300.png",
      companyInfos: [
        {
          id: 1,
          icon: "pe-7s-call",
          info: "+90 850 222 73 47",
          infoLink: { link: "+90 850 222 73 47", linkType: "tel:", target: "" },
        },
        {
          id: 2,
          icon: "pe-7s-mail-open-file",
          info: "info@reismakina.com",
          infoLink: {
            link: "info@reismakina.com",
            linkType: "mailto:",
            target: "",
          },
        },
        {
          id: 3,
          icon: "pe-7s-global",
          info: "www.reismakina.com",
          infoLink: {
            link: "https://www.reismakina.com",
            linkType: "",
            target: "_blank",
          },
        },
        {
          id: 4,
          icon: "pe-7s-map-marker",
          info: "Abdurrahmangazi, İmamoğlu Sokak, No:2 Sancaktepe/İstanbul",
          infoLink: {
            link: "https://goo.gl/maps/B42T4gvqbH7fbBzAA",
            linkType: "",
            target: "_blank",
          },
        },
      ],
    },
    {
      id: 2,
      title: "TOPÇULAR",
      subTitle: "Endüstriyel Üretim ve Yatırım A.Ş.",
      imgSrc: "/images/Topcular-300.png",
      companyInfos: [
        {
          id: 1,
          icon: "pe-7s-call",
          info: "+90 850 222 86 28",
          infoLink: { link: "+90 850 222 86 28", linkType: "tel:", target: "" },
        },
        {
          id: 2,
          icon: "pe-7s-mail-open-file",
          info: "info@topcular.com",
          infoLink: {
            link: "info@topcular.com",
            linkType: "mailto:",
            target: "",
          },
        },
        {
          id: 3,
          icon: "pe-7s-global",
          info: "www.topcular.com",
          infoLink: {
            link: "https://www.topcular.com",
            linkType: "",
            target: "_blank",
          },
        },
        {
          id: 4,
          icon: "pe-7s-map-marker",
          info: "Abdurrahmangazi, İmamoğlu Sokak, No:2 Sancaktepe/İstanbul",
          infoLink: {
            link: "https://goo.gl/maps/B42T4gvqbH7fbBzAA",
            linkType: "",
            target: "_blank",
          },
        },
      ],
    },
    {
      id: 3,
      title: "TKS",
      subTitle: "Ayakkabı ve Deri Üretimleri San. ve Tic. A.Ş.",
      imgSrc: "/images/TKS-300.png",
      companyInfos: [
        {
          id: 1,
          icon: "pe-7s-call",
          info: "+90 850 222 86 28",
          infoLink: { link: "+90 850 222 86 28", linkType: "tel:", target: "" },
        },
        {
          id: 2,
          icon: "pe-7s-mail-open-file",
          info: "info@topcular.com",
          infoLink: {
            link: "info@topcular.com",
            linkType: "mailto:",
            target: "",
          },
        },
        {
          id: 3,
          icon: "pe-7s-global",
          info: "www.tksayakkabi.com",
          infoLink: {
            link: "https://www.tksayakkabi.com",
            linkType: "",
            target: "_blank",
          },
        },
        {
          id: 4,
          icon: "pe-7s-map-marker",
          info: "Akçaburgaz Mah. 3116 Sok. No:10 İç Kapı No:1 Esenyurt/İstanbul",
        },
      ],
    },
    {
      id: 4,
      title: "MAR",
      subTitle: "Teknolojik Hizmetler ve Yatırım A.Ş.",
      imgSrc: "/images/Mar-300.png",
      companyInfos: [
        {
          id: 1,
          icon: "pe-7s-call",
          info: "+90 850 222 86 28",
          infoLink: { link: "+90 850 222 86 28", linkType: "tel:", target: "" },
        },
        {
          id: 2,
          icon: "pe-7s-mail-open-file",
          info: "info@topcuholding.com",
          infoLink: {
            link: "info@topcuholding.com",
            linkType: "mailto:",
            target: "",
          },
        },
        {
          id: 3,
          icon: "pe-7s-global",
          info: "www.marforeign.com",
          infoLink: {
            link: "https://www.marforeign.com",
            linkType: "",
            target: "_blank",
          },
        },
        {
          id: 4,
          icon: "pe-7s-map-marker",
          info: "Abdurrahmangazi, İmamoğlu Sokak, No:2 Sancaktepe/İstanbul",
          infoLink: {
            link: "https://goo.gl/maps/B42T4gvqbH7fbBzAA",
            linkType: "",
            target: "_blank",
          },
        },
      ],
    },
  ];

  useEffect(() => {
    changeTitle(t("translations:PageTitles:GroupCompanies"));
  }, []);

  return (
    <>
      <div>
        <TitleWrapper>
          {t("translations:PageTitles:GroupCompanies")}
        </TitleWrapper>
        <div className="nc-pagebody">
          <div className="flex-row">
            {COMPANIES.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupCompanies;
