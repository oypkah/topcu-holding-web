import { ICompany } from "../../types/Company/ICompany";
import InfoBox from "../InfoBox/InfoBox";

interface IProp {
  company: ICompany;
}

function CompanyCard({ company }: IProp) {
  return (
    <div
      className="flex-col-md-3 flex-col-sm-6 flex-col-xs-12 pd-micro"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="info-obj img-t g30 medium align-c typo-light animated s008 company"
        data-animin="fadeInUp|0.7"
        data-animout="fadeOut|0.1"
        data-bgcolor="rgba(255,255,255,0%)"
        style={{ width: "80%" }}
      >
        <div className="img txt-default group-company mr-b-10">
          <div className="company-img">
            <img
              src={company.imgSrc}
              alt={company.title + " " + company.subTitle}
              style={{ marginBottom: 15 }}
            />
          </div>
        </div>
        <div className="info">
          <div className="company-content">
            <div
              className="info-obj mr-0 img-l middle-md g20 tiny typo-light animated s008"
              data-animin="fadeInUp|0.6"
              data-animout="fadeOut|0.1"
            >
              <div className="info">
                <h5>{company.title}</h5>
                <h6 className="font-size-15">{company.subTitle}</h6>
              </div>
            </div>
            <hr
              className="light mr-tb-20 animated s008"
              data-animin="fadeInUp|0.5"
              data-animout="fadeOut|0.1"
            />
            {company.companyInfos.map((companyInfo) => (
              <InfoBox key={companyInfo.id} infoBox={companyInfo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CompanyCard;
