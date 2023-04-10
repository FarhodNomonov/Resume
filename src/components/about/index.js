import React from "react";
import "aos/dist/aos.css";
import { FormattedMessage } from "react-intl";

function About() {
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
