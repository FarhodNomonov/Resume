import { AllSvg } from "../export/svg";

function index() {
  const { AiFillHtml5, AiFillGithub, DiCss3Full, DiReact, SiJavascript } =
    AllSvg;

  const SkillData = [
    {
      id: "1",
      skillName: "HTML",
      skillPercent: 95,
      skillsIcon: <AiFillHtml5 style={{ color: "#e9622879" }} />,
      Animation: "fade-right",
    },
    {
      id: "2",
      skillName: "CSS,SCSS",
      skillPercent: 95,
      skillsIcon: <DiCss3Full style={{ fill: "#2862e978" }} />,
      Animation: "fade-right",
    },
    {
      id: "3",
      skillName: "JavaScript",
      skillPercent: 80,
      skillsIcon: <SiJavascript style={{ fill: "gold", fontSize: "125px" }} />,
      Animation: "fade-up",
    },
    {
      id: "4",
      skillName: "ReactJS",
      skillPercent: 90,
      skillsIcon: <DiReact style={{ fill: "#5ED3F3" }} />,
      Animation: "fade-left",
    },
    {
      id: "5",
      skillName: "Git",
      skillPercent: 90,
      skillsIcon: <AiFillGithub style={{ color: "#00000087" }} />,
      Animation: "fade-left",
    },
  ];
  return (
    <div id="skills" className="skills">
      {SkillData.map((data) => {
        return (
          <div
            data-aos-duration="1500"
            data-aos={data.Animation}
            key={data.id}
            className="skills_card"
          >
            <h1>{data.skillName}</h1>
            <div className="skills_percent">
              <section>
                <div className="skills_icon">{data.skillsIcon}</div>
                <svg
                  className="circle-chart"
                  viewBox="0 0 33.83098862 33.83098862"
                  width={200}
                  height={200}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="circle-chart__background"
                    stroke="#efefef"
                    strokeWidth={2}
                    fill="none"
                    cx="16.91549431"
                    cy="16.91549431"
                    r="15.91549431"
                  />
                  <circle
                    className="circle-chart__circle"
                    stroke="#0049ff"
                    strokeWidth={2}
                    strokeDasharray={data.skillPercent}
                    strokeLinecap="round"
                    fill="none"
                    cx="16.91549431"
                    cy="16.91549431"
                    r="15.91549431"
                  />
                  <g className="circle-chart__info">
                    <text
                      className="circle-chart__percent"
                      x="16.91549431"
                      y="15.5"
                      alignmentBaseline="central"
                      textAnchor="middle"
                      fontSize={8}
                    >
                      {`${data.skillPercent}%`}
                    </text>
                  </g>
                </svg>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default index;
