import React from "react";
import IntroImg from "../../../assets/img/intro_logo.jpg";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

function Intro() {
  return (
    <div id="intro" className="intro">
      <div className="intro_title">
        <h1>
          <FormattedMessage id="app.header" />
        </h1>
        <p>
          <FormattedMessage id="app.content" />
        </p>
        <a href="/cv/NomonovFarxod.pdf" download="Resume">
          <button>
            <FormattedMessage id="app.intro.download" />
          </button>
        </a>
        <div className="intro_icons">
          <a
            target={"_blank"}
            href={"https://www.instagram.com/farik_snu/"}
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            target={"_blank"}
            href={"https://www.facebook.com/profile.php?id=100069224957501"}
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            target={"_blank"}
            href={"https://wa.me/998907972434/"}
            rel="noopener noreferrer"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
      <div className="intro_logo">
        <img src={IntroImg} alt="..." />
      </div>
    </div>
  );
}

export default Intro;
