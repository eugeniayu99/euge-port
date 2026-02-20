import { workText } from "../constants";

const Work = () => {
  return (
    <section id="work">
      <div className="work__inner">
        <h2 className="work__title">
            Professional Projects <em>실무 프로젝트</em>
        </h2>
        <div className="work__wrap">
          {workText.map((work, idx) => (
            <article className={`work__item s${idx+1}`} key={idx}>
              <div className="panel__bar">
                <span className="panel__name">PROJECT.exe</span>
                <span className="panel__btns">
                  <i className="dot" />
                  <i className="dot" />
                  <i className="dot" />
                </span>
              </div>
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
                  {work.view && (
                    <a href={work.view} target="_blank" rel="noopener noreferrer">
                      view
                    </a>
                  )}
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