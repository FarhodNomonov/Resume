import React, { useContext } from "react";
import "aos/dist/aos.css";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";
import en from "../../lang/en.json";
import ru from "../../lang/ru.json";
import uz from "../../lang/uz.json";

function About() {
  const context = useContext(Context);
  const lang = { en, ru, uz };
  console.log(
    lang[context.locale.toLowerCase().slice(0, 2)]["app.about.desc"]?.replace(
      /{{[^%]?%(?<age>\d)}}/g
    ),
    "--------"
  );

  return (
    <div data-aos="fade-up" id="about" className="about">
      <div className="about_title">
        <h1>
          <FormattedMessage id="app.about.aboutme" />
        </h1>
        <p>
          <FormattedMessage id="app.about.desc" />
        </p>
      </div>
    </div>
  );
}

export default About;
