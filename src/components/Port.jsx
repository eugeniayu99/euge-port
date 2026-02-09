import React, { useEffect } from "react";
import port01 from "../assets/img/ice1.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const portText = [
  {
    type:"Web Site",
    title:"타이틀",
    desc:"포폴설명",
    img: port01,
    view: "/",
    alt:"최유진 포트폴리오"
  },
  {
    type:"JavaScript",
    title:"타이틀",
    desc:"포폴설명",
    img: port01,
    view: "/",
    alt:"최유진 포트폴리오"
  },
  {
    type:"React",
    title:"타이틀",
    desc:"포폴설명",
    img: port01,
    view: "/",
    alt:"최유진 포트폴리오"
  },
  {
    type:"Design",
    title:"타이틀",
    desc:"포폴설명",
    img: port01,
    view: "/",
    alt:"최유진 포트폴리오"
  },
  {
    type:"Design",
    title:"타이틀",
    desc:"포폴설명",
    img: port01,
    view: "/",
    alt:"최유진 포트폴리오"
  },

]

const Port = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".port__item");
    const container = document.querySelector("#port");

    if (!container || sections.length === 0) return;

    ScrollTrigger.getAll()
      .filter((st) => st.trigger === container)
      .forEach((st) => st.kill());

    const tween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 56px",
        end: () => "+=" + container.offsetWidth,
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="port">
      <div className="port__inner">
        <h2 className="port__title">
          Personal Projects <em>개인 프로젝트</em>
        </h2>
        <div className="port__wrap">     
          {portText.map((port,key) => (
            <article className={`port__item p${key+1}`} key={key}>
            <span className="type">{port.type}</span>
            <a href={port.view}target="_blank" className="img">
             <img src={port.img} alt={port.alt} />
            </a>
            <h3 className="title">{port.title}</h3>
            <p className="desc">{port.title}</p>
            <a href={port.view} target="_blank" className="site">사이트 보기</a>
          </article>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Port;