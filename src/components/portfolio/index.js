import React from "react";
import TherePublick from "../../assets/img/therepublick.png";
import Chint from "../../assets/img/Chint.png";
import Bukhara from "../../assets/img/Bukhara.png";
import Tiktok from "../../assets/img/TiktokDowload.png";
import Nura from "../../assets/img/Nura.png";
import Hsl from "../../assets/img/HSL.png";
import Steam from "../../assets/img/steam.png";
import Beshr from "../../assets/img/Beshr.png";
import Nipon from "../../assets/img/Nipon.png";
import Nuran from "../../assets/img/Nuran.png";
import { FormattedMessage } from "react-intl";

function PortFolio() {
  const Works = [
    {
      id: "1",
      img: Hsl,
      link: "https://hsl.techdatasoft.uz/",
      animation: "fade-right",
    },
    {
      id: "2",
      img: TherePublick,
      link: "https://therepublicoftoys.uz/",
      animation: "fade-right",
    },
    {
      id: "3",
      img: Chint,
      link: "https://app.chint.techdatasoft.uz/",
      animation: "fade-left",
    },
    {
      id: "4",
      img: Bukhara,
      link: "https://bnpfabric.uz/",
      animation: "fade-left",
    },
    {
      id: "5",
      img: Steam,
      link: "https://steamwallet.ru/",
      animation: "fade-right",
    },
    {
      id: "6",
      img: Nura,
      link: "https://nuragroup.uz/",
      animation: "fade-right",
    },
    {
      id: "7",
      img: Tiktok,
      link: "https://ducktik.netlify.app/",
      animation: "fade-left",
    },
    {
      id: "8",
      img: Beshr,
      link: "https://beshr.techdatasoft.uz/",
      animation: "fade-left",
    },
    {
      id: "9",
      img: Nipon,
      link: "https://nipon.techdatasoft.uz/",
      animation: "fade-right",
    },

    {
      id: "10",
      img: Nuran,
      link: "https://nura.new.techdatasoft.uz/",
      animation: "fade-right",
    },
  ];
  return (
    <div id="portfolio" className="portfolio">
      <h1>
        <FormattedMessage id="app.portfolio.works" />
      </h1>
      <div className="d_flex">
        {Works?.map((data) => {
          return (
            <a
              data-aos-duration="1500"
              data-aos={data.animation}
              key={data.id}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio_card">
                <div className="portfolio_logo">
                  <img src={data.img} alt="Логотип" />
                </div>
                <div className="after">
                  <FormattedMessage id="app.portfolio.more" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default PortFolio;
