import { IInfoBox } from "../../types/InfoBox/InfoBox";

interface IProps {
  infoBox: IInfoBox;
}
function InfoBox({ infoBox }: IProps) {
  return (
    <>
      <div
        className="info-obj mr-0 img-l middle-md g20 tiny typo-light animated s008"
        data-animin="fadeInUp|0.3"
        data-animout="fadeOut|0.1"
      >
        <div
          className="img txt-default"
          style={{ marginBottom: 0, marginLeft: 30 }}
        >
          <span className="iconwrp">
            <i className={infoBox.icon} />
          </span>
        </div>
        <div className="info">
          <h3 className="title mini mr-b-0 f-2 bold-1">
            {infoBox.infoLink != null ? (
              <a
                href={infoBox.infoLink.linkType + infoBox.infoLink.link}
                target={infoBox.infoLink.target}
              >
                {infoBox.info}
              </a>
            ) : (
              <span>{infoBox.info}</span>
            )}
          </h3>
        </div>
      </div>
      <hr
        className="light mr-tb-20 animated s008"
        data-animin="fadeInUp|0.3"
        data-animout="fadeOut|0.1"
      />
    </>
  );
}
export default InfoBox;
