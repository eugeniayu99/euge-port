import { useState } from "react";

const headerNav = [
  {
    title:"intro",
    url:"#intro"
  },
  {
    title:"skill",
    url:"#skill"
  },
  {
    title:"site",
    url:"#site"
  },
  {
    title:"portfolio",
    url:"#port"
  },
  {
    title:"contact",
    url:"#contact"
  }
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="/">euge<em>portfolio</em></a>
          </h1>
        </div>
        <nav 
          className={`header__nav ${isOpen ? "isOpen" : ""}`} 
          role="navigation" 
          aria-label="메인메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div 
          className="header__nav__mobile" 
          id="headerToggle" 
          aria-controls="primary-menu" 
          aria-expanded={isOpen ? "true" : "false"} 
          role="button" 
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header