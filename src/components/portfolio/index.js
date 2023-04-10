import React from "react";
import { FormattedMessage } from "react-intl";
import TherePublick from "../../assets/img/therepublick.png";
import Chint from "../../assets/img/Chint.png";
import Bukhara from "../../assets/img/Bukhara.png";
import Nura from "../../assets/img/Nura.png";
import Sarkor from "../../assets/img/Sarkor.png";
import InsureX from "../../assets/img/InsureX.png";
import Team from "../../assets/img/team-us.png";

function PortFolio() {
  const Works = [
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
      animation: "fade-right",
    },
    {
      id: "4",
      img: Bukhara,
      link: "https://bnpfabric.uz/",
      animation: "fade-left",
    },
    {
      id: "6",
      img: Nura,
      link: "https://nuragroup.uz/",
      animation: "fade-left",
    },
    {
      id: "11",
      img: Sarkor,
      link: "http://sarkor.techdatasoft.uz/",
      animation: "fade-left",
    },
    {
      id: "13",
      img: Team,
      link: "https://techdatasoft.uz/en/home",
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
