import { useEffect } from "react";
import TitleWrapper from "../TitleWrapper/TitleWrapper";

function Location() {
  useEffect(() => {
    document.title = "Topçu Holding - Lokasyon";
  }, []);
  return (
    <>
      <div className="container w90">
        <TitleWrapper>LOKASYON</TitleWrapper>
        <div className="nc-map vh90 z0-1">
          <div
            className="gmap-widget h100 w100"
            data-fullh="y"
            data-fullh-wrp="flex-col-lg-6"
            data-map-latitude="40.99907689692691"
            data-map-longitude="29.23431481341011"
            data-map-markerhd="Envato"
            data-map-markerhtml='<div class="pd-10 align-c"><h2 class="fs18 mr-b-10">Envato</h2><p class="fs16 mr-0">PO Box 16122, Collins Street West,<br>Victoria 8007, Australia</p></div>'
          ></div>
        </div>
      </div>
    </>
  );
}

export default Location;
