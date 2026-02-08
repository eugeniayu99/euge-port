import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import sassImg from "../assets/img/sass.png";
import jsImg from "../assets/img/js.png";
import jqImg from "../assets/img/jquery.png";
import tsImg from "../assets/img/ts.png";
import reactImg from "../assets/img/react.png";
import nodeImg from "../assets/img/node.png";
import nextImg from "../assets/img/nextjs.png";
import nestImg from "../assets/img/nestjs.png";
import mysqlImg from "../assets/img/mysql.png";

import vscode from "../assets/img/vscode.png";
import jet from "../assets/img/jet.png";
import photoshop from "../assets/img/photoshop.png";
import illustrator from "../assets/img/illustrator.png";
import premiere from "../assets/img/premiere.png";
import figma from "../assets/img/figma.png";
import git from "../assets/img/git.png";

const aboutText = [
  {
    title: "Name",
    desc: "최유진 "
  },
  {
    title: "Birth",
    desc: "1997.06"
  },
  {
  title: "Education",
  desc: ` 2025.10 ~ 26.02 | React&Node기반 모던 웹 풀스택
          코리아IT아카데미

          2022.12 ~ 2023.03 | 리액트(React.js) 기반 프론트엔드 개발 양성과정
          이젠아카데미컴퓨터학원

          2021.08 ~ 2022.02 | UI/UX 웹디자인 & 웹퍼블리셔
          연희직업전문학교

          2020.10 ~ 2020.12 | 포토샵 & 일러스트
          그린컴퓨터아카데미

          2017.06 ~ 2020.04 | 스페인 어학연수

          2016.03 ~ 2021.08 | 한국관광대학교 졸업 (전문학사)
          관광중국어과 

          2016 | 인천삼산고등학교 졸업
        `
  },
  {
    title: "Experience",
    desc: ` 2022.05 ~ 2022.11 | 트래볼루션 | 웹디자이너&퍼블리셔

            2023.04 ~ 2025.08 | 아이스캔디(어벤저스)| 웹퍼블리셔
          `
  },
  {
    title: "My Skills",
    img: [htmlImg, cssImg, sassImg, jqImg, jsImg, tsImg, reactImg, nodeImg, nextImg, nestImg, mysqlImg]
  },
  {
    title: "Used Tools",
    img: [vscode, jet, photoshop, illustrator, premiere, figma, git]
  }

  
]

const About = () => {
  
  return (
    <section id="about">
      <div class="about__inner">
        <h2 class="about__title">
          About Me <em>나를 소개합니다.</em>
        </h2>
        <div class="about__cont">
          <h3 className="intro">Web Publisher & Frontend Developer</h3>
          {aboutText.map((about) => (
            <div className="info">
              <p>{about.title}</p>
              {about.desc && <p>{about.desc}</p>}
              {about.img && (
                <div className="skill__img">
                  {about.img.map((img, i) => (
                    <div className="skill__item"><img src={img} alt={about.title} key={i} /></div>
                  ))}
                </div>
              )}
            </div>
          ))}   
        </div>
      </div>
    </section>
  )
}

export default About