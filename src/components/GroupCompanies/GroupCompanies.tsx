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
      phoneNumber: "+90 850 222 73 47",
      email: "info@reismakina.com",
      webSite: "https://www.reismakina.com",
      address: "Abdurrahmangazi, İmamoğlu Sokak, No:2 Sancaktepe/İstanbul",
      addressGoogleMapsLink: "https://goo.gl/maps/B42T4gvqbH7fbBzAA",
    },
    {
      id: 2,
      title: "TOPÇULAR",
      subTitle: "Endüstriyel Üretim ve Yatırım A.Ş.",
      imgSrc: "/images/Topcular-300.png",
      phoneNumber: "+90 850 222 86 28",
      email: "info@topcular.com",
      webSite: "https://www.topcular.com",
      address: "Abdurrahmangazi, İmamoğlu Sokak, No:C/6 Sancaktepe/İstanbul",
      addressGoogleMapsLink: "https://goo.gl/maps/B42T4gvqbH7fbBzAA",
    },
    {
      id: 3,
      title: "TKS",
      subTitle: "Ayakkabı ve Deri Üretimleri San. ve Tic. A.Ş.",
      imgSrc: "/images/TKS-300.png",
      phoneNumber: "+90 850 222 86 28",
      email: "info@topcular.com",
      webSite: "https://www.tksayakkabi.com",
      address: "Akçaburgaz Mah. 3116 Sok. No:10 İç Kapı No:1 Esenyurt/İstanbul",
    },
    {
      id: 4,
      title: "MAR",
      subTitle: "Teknolojik Hizmetler ve Yatırım A.Ş.",
      imgSrc: "/images/Mar-300.png",
      phoneNumber: "+90 850 222 86 28",
      email: "info@topcuholding.com",
      webSite: "https://www.marforeign.com",
      address: "Abdurrahmangazi, İmamoğlu Sokak, Sancaktepe/İstanbul",
      addressGoogleMapsLink: "https://goo.gl/maps/B42T4gvqbH7fbBzAA",
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
