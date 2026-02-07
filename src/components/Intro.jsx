import { useState, useEffect } from "react";

const Intro = () => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const word = "EUGE PORTFOLIO";

  useEffect(() => {
    let i = 0;

    const type = () => {
      if (i < word.length) {
        setText(word.slice(0, i + 1));
        i++;
        setTimeout(type, 200);
      } else {
        setDone(true);
        setTimeout(() => {
          setShowWelcome(true);
        }, 800);
      }
    };

    type();
  }, []);

  return (
    <section id="intro">
      <div className="intro__inner">

        {showWelcome && (
          <p className="welcome">Hello World!</p>
        )}

        <h2 className="intro__title">
          {text}
          {!done && <span className="cursor">█</span>}
        </h2>

        <p className="scroll">▼ SCROLL ▼</p>
      </div>
    </section>
  );
};

export default Intro;
