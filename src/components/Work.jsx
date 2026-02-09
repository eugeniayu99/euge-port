import w1 from "../assets/img/ice1.png";

const workText = [
  {
    img: w1,
    title: "증평투어패스",
    period: "2024.03 – 2024.06",
    role: "Web Designer & Publisher",
    contribution: "메인 페이지 퍼블리싱 및 반응형 구현",
    tech: ["React", "SCSS", "GSAP"],
    view: "https://example.com"
  },
  {
    img: w1,
    title: "증평투어패스",
    period: "2024.03 – 2024.06",
    role: "Web Designer & Publisher",
    contribution: "메인 페이지 퍼블리싱 및 반응형 구현",
    tech: ["React", "SCSS", "GSAP"],
    view: "https://example.com"
  },
  {
    img: w1,
    title: "증평투어패스",
    period: "2024.03 – 2024.06",
    role: "Web Designer & Publisher",
    contribution: "메인 페이지 퍼블리싱 및 반응형 구현",
    tech: ["React", "SCSS", "GSAP"],
    view: "https://example.com"
  },
  {
    img: w1,
    title: "증평투어패스",
    period: "2024.03 – 2024.06",
    role: "Web Designer & Publisher",
    contribution: "메인 페이지 퍼블리싱 및 반응형 구현",
    tech: ["React", "SCSS", "GSAP"],
    view: "https://example.com"
  },
];

const Work = () => {
  return (
    <section id="work">
      <div className="work__inner">
        <h2 className="work__title">
            Professional Projects <em>실무 프로젝트</em>
        </h2>
        <div className="work__wrap">
          {workText.map((work, key) => (
            <article className={`work__item s${key+1}`} key={key}>
              <div className="imgBox">
                <img src={work.img} alt={work.title} />
              </div>
              <div className="text">
                <h3 className="title">
                  {work.title}
                </h3>
                <div className="info">
                  <p>{work.period}</p>
                  <p className="contribution">{work.contribution}</p>
                  <div className="techChips">
                    {work.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                  <a href={work.view}>view</a>
                </div>
                
              </div>
            </article> 
          ))}
                  
        </div>
      </div>
    </section>
  )
}

export default Work