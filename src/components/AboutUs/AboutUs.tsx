import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    document.title = "Topçu Holding - Hakkımızda";
  }, []);

  return (
    <>
      <div className="container">
        <div className="nc-titlewrapper align-c typo-light mr-b-60">
          <h3
            className="nc-titlewrapper--tile fs26 f-1 txt-upper animated s008"
            data-animin="fadeInUp|0.1"
            data-animout="fadeOut|0.1"
          >
            Hakkımızda
          </h3>
        </div>
        <div className="nc-pagebody">
          <div className="flex-row gt60">
            <div
              className="flex-col-md-5"
              data-nc-sm="mr-b-40"
              style={{ alignSelf: "center" }}
            >
              <div
                className="nc-left animated s008"
                data-animin="fadeInLeft|0.3"
                data-animout="fadeOut|0.1"
                style={{ textAlign: "center" }}
              >
                <img
                  src="/images/topcu-holding-beyaz-logo.png"
                  alt="Topçu Holding Beyaz Logo"
                  style={{ display: "inline-block" }}
                />
              </div>
            </div>
            <div className="flex-col-md-7 typo-light">
              <p
                className="fs16 f-2 op-08 bold-1 animated s008"
                data-animin="fadeIn|0.4"
                data-animout="fadeOut|0.1"
              >
                Topçu Holding; yüz yılı așan ticari yolculuğunda ülkemizin
                sanayileșme ve globalleșme sürecine katkı sağlamıș, istikrarı ve
                etik değerlere bağlılığıyla faaliyet gösterdiği makine, inșaat,
                enerji, hırdavat ve nalburiye sektörlerinde daima öncü konumunu
                korumuștur. Geçmișten gelen güvenilirliğini, yenilikçi ve
                dinamik bir yaklașımla birleștiren Topçu Holding, teknolojik
                gelișmeleri takip etmekte ve tüm dünyadan özenle seçtiği küresel
                markaların ürünlerini sanayi ve üretim dünyasıyla bir araya
                getirmektedir.
              </p>
              <p
                className="fs16 f-2 op-08 bold-1 animated s008"
                data-animin="fadeIn|0.4"
                data-animout="fadeOut|0.1"
              >
                “Birlikten Kuvvet Doğar” anlayıșını benimseyen Topçu Holding,
                Türkiye’nin dört bir yanındaki bayileriyle 100’ün üzerinde dünya
                markasının ürünlerini tüketiciyle bulușturmanın yanı sıra,
                sürdürdüğü AR-GE çalıșmaları neticesinde geliștirdiği yerli
                üretim ürünleri yurtiçi ve yurtdıșı pazarına sunmakta, ülke
                ekonomisine ve istihdama sağladığı katkının haklı onurunu
                yașamaktadır.
              </p>
              <p
                className="fs16 f-2 op-08 bold-1 animated s008"
                data-animin="fadeIn|0.4"
                data-animout="fadeOut|0.1"
              >
                Faaliyetlerini müșteri memnuniyeti, sürdürülebilirlik ve
                toplumsal sorumluluk anlayıșıyla yürüten Topçu Holding; bugün
                olduğu gibi gelecekte de müșterileri, çözüm ortakları,
                çalıșanları ve toplum için değer üretmeyi hedeflemektedir.
              </p>
              <p
                className="fs16 f-2 op-08 bold-1 animated s008"
                data-animin="fadeIn|0.4"
                data-animout="fadeOut|0.1"
              >
                Topçu Holding olarak tarihi, milli ve kültürel sorumluluğumuzun
                farkındayız. Türkiye distribütörlüğünü yaptığımız global
                markalarımız, yerli ve milli üretimle ekonomimize katkı sağlamak
                konusundaki kararlılığımız ve olușturduğumuz istihdam olanakları
                ile geçmiște olduğu gibi yarın da ilerlemeye ve ülkemize katkı
                sağlamaya devam edeceğiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
