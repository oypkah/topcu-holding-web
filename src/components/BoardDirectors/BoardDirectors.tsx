import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import changeTitle from "../../helpers/changeTitle";

interface IBoardDirectors {
  key: number;
  name: string;
  title: string;
}
interface IBoardDirectorRowProps {
  name: string;
  title: string;
}

function BoardDirectors() {
  const { t } = useTranslation();

  const [boardDirectors, setBoardDirectors] = useState<IBoardDirectors[]>();

  useEffect(() => {
    changeTitle(t("translations:PageTitles:BoardDirectors"));
  }, []);

  useEffect(() => {
    setBoardDirectors(BOARD_DIRECTORS);
  }, [t]);

  const titleType = {
    chairmanOfTheBoard: t("translations:DirectorTitles:ChairmanOfTheBoard"),
    vicechairmanOfTheBoard: t(
      "translations:DirectorTitles:VicechairmanOfTheBoard"
    ),
    boardMember: t("translations:DirectorTitles:BoardMember"),
    generalManager: t("translations:DirectorTitles:GeneralManager"),
  };

  const BOARD_DIRECTORS: IBoardDirectors[] = [
    { key: 1, name: "Dursun TOPÇU", title: titleType.chairmanOfTheBoard },
    { key: 2, name: "Abdullah TOPÇU", title: titleType.vicechairmanOfTheBoard },
    { key: 3, name: "Ali Reis TOPÇU", title: titleType.boardMember },
    { key: 4, name: "Adnan TOPÇU", title: titleType.boardMember },
    { key: 5, name: "Mustafa TOPÇU", title: titleType.boardMember },
    { key: 6, name: "Ömer Faruk TOPÇU", title: titleType.boardMember },
    { key: 7, name: "Mehmet Talha TOPÇU", title: titleType.boardMember },
    { key: 8, name: "Muhammet Yusuf TOPÇU", title: titleType.boardMember },
    {
      key: 9,
      name: "Başar DEMİRCAN",
      title: `${titleType.boardMember} Ve ${titleType.generalManager}`,
    },
  ];

  const BoardDirectorRow = (props: IBoardDirectorRowProps) => {
    return (
      <>
        <div
          className="info-obj mr-0 img-l middle-md g20 tiny typo-light animated s008"
          data-animin="fadeInUp|0.6"
          data-animout="fadeOut|0.1"
        >
          <div
            className="img txt-default"
            style={{ marginBottom: 0, marginLeft: 30 }}
          >
            <span className="iconwrp">
              <i className="pe-7s-user" />
            </span>
          </div>
          <div className="info" style={{ display: "flex" }}>
            <h3
              className="title mini mr-b-0 f-2 bold-1"
              style={{ width: "300px", minWidth: "300px" }}
            >
              {props.name}
            </h3>
            <h3
              className="title mini mr-b-0 f-2 bold-1"
              style={{ minWidth: "400px" }}
            >
              {props.title}
            </h3>
          </div>
        </div>
        <hr
          className="light mr-tb-20 animated s008"
          data-animin="fadeInUp|0.5"
          data-animout="fadeOut|0.1"
        />
      </>
    );
  };
  return (
    <div className="container">
      <div className="nc-titlewrapper align-c typo-light mr-b-60">
        <h3
          className="nc-titlewrapper--tile fs26 f-1 txt-upper animated s008"
          data-animin="fadeInUp|0.1"
          data-animout="fadeOut|0.1"
        >
          {t("translations:PageTitles:BoardDirectors")}
        </h3>
      </div>
      <div className="nc-pagebody">
        <div className="flex-row gt60">
          <div className="company-content">
            <div className="flex-row">
              {boardDirectors !== undefined &&
                boardDirectors.length > 0 &&
                boardDirectors.map((boardDirector) => (
                  <BoardDirectorRow
                    key={boardDirector.key}
                    name={boardDirector.name}
                    title={boardDirector.title}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardDirectors;
