import { useEffect } from "react";
import TitleWrapper from "../TitleWrapper/TitleWrapper";

interface IJob {
  id: number;
  company: string;
  title: string;
  experience: string;
  location: string;
  time: string;
}

interface ICardProps {
  job: IJob;
}

function Career() {
  useEffect(() => {
    document.title = "Topçu Holding - Kariyer";
  }, []);

  const JOBS: IJob[] = [
    {
      id: 1,
      company: "Reis Makina",
      title: "Bilgi İşlem",
      experience: "Staj",
      location: "İstanbul/Sancaktepe",
      time: "Yarı Zamanlı",
    },
  ];

  const Card: React.FC<ICardProps> = (props: ICardProps) => {
    return (
      <div className="flex-col-md-4 flex-col-sm-6 flex-col-xs-12 mr-b-20">
        <div className="ead-card">
          <div className="ead-card__header clearfix">
            <div className="float-left d-flex align-items-center">
              {/* Disability Sign Icon */}
              <div
                className="ead-card__header__badge"
                style={{ backgroundColor: "transparent" }}
              >
                <img src="https://yonetim.reismakina.net/images/Reis/reismakina-01.png" />
              </div>
            </div>
            {/* <div className="float-right">
              <a
                href="javascript:;"
                className="ead-fav"
                ng-click="addFavorite($event, 'PUGSlBTLhUnC04LmsXLlj8gj%2b0D3dstU')"
              >
                <img
                  src="/svg/add-favorite.svg"
                  className="ead-card__header__icon"
                />
              </a>
            </div> */}
          </div>
          <div className="ead-card__content">
            <h3 className="ead-card__title">{props.job.title}</h3>
            <p className="ead-card__institution">İntema</p>
            <ul className="ead-card__list">
              <li>
                <img
                  src="/svg/experienced.svg"
                  className="ead-card__list__item__icon"
                  alt="Deneyim"
                />
                {props.job.experience}
              </li>
              <li>
                <img
                  src="/svg/location.svg"
                  className="ead-card__list__item__icon"
                  alt="Lokasyon"
                />
                {props.job.location}
              </li>
              <li>
                <img
                  src="/svg/full-time.svg"
                  className="ead-card__list__item__icon"
                  alt="Tam Zamanlı"
                />
                {props.job.time}
              </li>
            </ul>
          </div>
          <div className="ead-card__footer">
            <a href="" className="ead-card__link">
              İlanı İncele
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <TitleWrapper>KARİYER</TitleWrapper>
      <div className="flex-row gt60">
        {JOBS.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Career;
