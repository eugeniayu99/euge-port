import { aboutText } from "../constants";

const About = () => {
  
  return (
    <section id="about">
      <div className="about__inner">
        <h2 className="about__title">
          About Me <em>나를 소개합니다.</em>
        </h2>
        <div className="about__cont">
          <h3 className="intro">Web Publisher & Frontend Developer</h3>
          {aboutText.map((about, idx) => (
            <div className="info" key={idx}>
              <p>{about.title}</p>
              {about.desc && <p>{about.desc}</p>}
              {Array.isArray(about.img) && (
                <div className="skill__img">
                  {about.img.map((img, imgIdx) => (
                    <div className="skill__item" key={imgIdx}>
                      <img src={img} alt={about.title} />
                    </div>
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