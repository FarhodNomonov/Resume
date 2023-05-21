import { useMemo, useState } from "react";
import IntroImg from "../../../assets/img/intro_logo.png";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FormattedMessage, useIntl } from "react-intl";
import Modal from "../../ui/modal";

function Intro() {
  const { locale = "Ru" } = useIntl();
  const [open, setOpen] = useState(false);

  const lang = useMemo(() => locale.split("-")[0], [locale]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = () => {
    setOpen(true);
  };

  return (
    <div id="intro" className="intro">
      <div className="intro_title">
        <h1>
          <FormattedMessage id="app.header" />
        </h1>
        <p>
          <FormattedMessage id="app.content" />
        </p>
        <div className="btn_flex">
          <a href={`/cv/NomonovFarxod${lang}.pdf`} download={`Resume-${lang}`}>
            <button>
              <FormattedMessage id="app.intro.download" />
            </button>
          </a>
          <button onClick={handleModal}>
            <FormattedMessage id="app.contactme" />
          </button>
        </div>

        {open && <Modal onClose={handleClose} />}
        <div className="intro_icons">
          <a
            target={"_blank"}
            href={"https://www.instagram.com/nomonov_farhod/"}
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
