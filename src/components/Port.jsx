import { useEffect, useRef } from "react";
import { portText } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Port = () => {
  const sectionRef = useRef(null); // #port
  const wrapRef = useRef(null);    // .port__wrap

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const section = sectionRef.current;
  const wrap = wrapRef.current;
  if (!section || !wrap) return;

  const ctx = gsap.context(() => {
    const getDistance = () => {
      return wrap.scrollWidth - section.clientWidth;
    };

    gsap.to(wrap, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 56px",
        end: () => `+=${getDistance()}`, // ✅ 핵심
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  }, section);

  return () => ctx.revert();
}, []);

  return (
    <section id="port" ref={sectionRef}>
      <div className="port__inner">
        <h2 className="port__title">
          Personal Projects <em>개인 프로젝트</em>
        </h2>

        <div className="port__wrap" ref={wrapRef}>
          {portText.map((port, idx) => (
            <article className={`port__item p${idx + 1}`} key={idx}>
              <div className="panel__bar">
                <span className="panel__name">{port.type}.exe</span>
                <span className="panel__btns">
                  <i className="dot" />
                  <i className="dot" />
                  <i className="dot" />
                </span>
              </div>

              <a
                href={port.view}
                target="_blank"
                rel="noreferrer noopener"
                className="img"
              >
                <img src={port.img} alt={port.alt} />
              </a>

              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>

              <a
                href={port.view}
                target="_blank"
                rel="noreferrer noopener"
                className="site"
              >
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
