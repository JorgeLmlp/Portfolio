import { ArrowUpIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useLanguage } from "../../context/languageContext";
import "./style.css";

export const SiteFooter = () => {
  const { copy } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <span className="footer-eyebrow">{copy.footer.eyebrow}</span>
        <h2>{copy.footer.title}</h2>
        <a className="footer-contact" href="mailto:jorgelmlp2@gmail.com">
          {copy.footer.contact}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-links">
        <div>
          <span>{copy.footer.navigation}</span>
          <a href="#home">{copy.nav.home}</a>
          <a href="#page2">{copy.nav.about}</a>
          <a href="#page4">{copy.nav.skills}</a>
        </div>
        <div>
          <span>{copy.footer.social}</span>
          <a
            href="https://github.com/JorgeLmlp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <GitHubLogoIcon />
          </a>
          <a href="mailto:jorgelmlp2@gmail.com">Email ↗</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Jorge Moraes. {copy.footer.rights}
        </p>
        <a href="#home">
          {copy.footer.top} <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
};
