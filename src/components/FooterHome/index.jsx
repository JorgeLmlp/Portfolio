import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import "./style.css";

export const FooterHome = () => {
  return (
    <div className="home-socials" aria-label="Social links">
      <a href="mailto:jorgelmlp2@gmail.com" aria-label="Email">
        <EnvelopeClosedIcon />
      </a>
      <a
        href="https://github.com/JorgeLmlp"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <GitHubLogoIcon />
      </a>
    </div>
  );
};
