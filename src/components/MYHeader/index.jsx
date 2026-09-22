import "./style.css";
import Download from "../../assets/images/Download.png";
import curriculumEnglish from "../../assets/curriculo_jorgeMoraes-EN.pdf";
import curriculumPortuguese from "../../assets/Curriculo_Jorge_Moraes-ptbr.pdf";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/languageContext";

const MyHeader = () => {
  const { language, copy, toggleLanguage } = useLanguage();
  const curriculum =
    language === "en" ? curriculumEnglish : curriculumPortuguese;
  const curriculumFilename =
    language === "en"
      ? "Jorge_Moraes_Resume_EN.pdf"
      : "Curriculo_Jorge_Moraes_PT-BR.pdf";
  const themeTransitionTimer = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(
    () => () => {
      if (themeTransitionTimer.current)
        window.clearTimeout(themeTransitionTimer.current);
    },
    [],
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    if (themeTransitionTimer.current)
      window.clearTimeout(themeTransitionTimer.current);

    setDarkMode((current) => !current);

    themeTransitionTimer.current = window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 650);
  };

  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    const header = document.querySelector(".header");
    if (!footer || !header) return undefined;

    let frameId = null;
    let headerBottom = 0;

    const measureHeader = () => {
      const top = Number.parseFloat(window.getComputedStyle(header).top) || 0;
      headerBottom = top + header.offsetHeight;
    };

    const updateVisibility = () => {
      frameId = null;
      const reachedFooter = footer.getBoundingClientRect().top <= headerBottom;
      setIsFooterVisible(reachedFooter);
    };

    const requestUpdate = () => {
      if (frameId === null)
        frameId = window.requestAnimationFrame(updateVisibility);
    };

    const handleResize = () => {
      measureHeader();
      requestUpdate();
    };

    measureHeader();
    updateVisibility();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`header${isFooterVisible ? " header--hidden" : ""}`}
      aria-hidden={isFooterVisible}
    >
      <nav
        className="header-nav"
        aria-label={
          language === "en" ? "Main navigation" : "Navegação principal"
        }
      >
        <a href="#home">{copy.nav.home}</a>
        <a href="#page2">{copy.nav.about}</a>
        <a href="#page4">{copy.nav.skills}</a>
        <a href="mailto:jorgelmlp2@gmail.com">{copy.nav.contact}</a>
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-pressed={darkMode}
          aria-label={darkMode ? copy.theme.light : copy.theme.dark}
          title={darkMode ? copy.theme.light : copy.theme.dark}
        >
          <span
            className="theme-toggle-icon"
            key={darkMode ? "sun" : "moon"}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </span>
        </button>

        <button
          className="language-toggle"
          type="button"
          onClick={toggleLanguage}
          aria-label={copy.languageLabel}
          title={copy.languageLabel}
        >
          <span className={language === "en" ? "active" : ""}>EN</span>
          <span className={language === "pt" ? "active" : ""}>PT</span>
        </button>

        <a
          id="CV"
          className="DownloadCV"
          href={curriculum}
          download={curriculumFilename}
        >
          {copy.nav.resume} <img className="CVimg" src={Download} alt="" />
        </a>
      </div>
    </header>
  );
};

export default MyHeader;
