const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>

        <div className="contact__text">
          <div className="panel__bar">
            <span className="panel__name">CONTACT.exe</span>
            <span className="panel__btns">
              <i className="dot" />
              <i className="dot" />
              <i className="dot" />
            </span>
          </div>

          <div className="text">
            <a href="mailto:dbwls0625@naver.com" target="_blank" rel="noreferrer">
              mail : DBWLS0625@NAVER.COM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;