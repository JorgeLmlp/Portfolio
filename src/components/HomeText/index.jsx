import { useState } from "react";
import TextType from "@/assets/animations/TextType";
import { useLanguage } from "../../context/languageContext";
import "./style.css";

const HomeText = () => {
  const { copy } = useLanguage();
  const [photoAvailable, setPhotoAvailable] = useState(true);
  const profilePhoto = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/profile-cutout.png`;

  return (
    <div className="home-copy">
      <div className="home-tech-grid" aria-hidden="true" />

      <div className="home-content">
        <div className="home-heading">
          <div className="home-availability">
            <i aria-hidden="true" />
            <span>{copy.home.availability}</span>
          </div>

          <TextType
            text={["JORGE MORAES"]}
            typingSpeed={140}
            deletingSpeed={90}
            pauseDuration={2400}
            className="blackfuture"
          />
        </div>

        <div className="home-presentation">
          <div className="home-summary">
            <p>{copy.home.introduction}</p>
            <div className="home-actions">
              <a className="home-action-primary" href="#page2">
                {copy.home.aboutAction}
              </a>
              <a href="mailto:jorgelmlp2@gmail.com">
                {copy.home.contactAction}
              </a>
            </div>
          </div>

          <div className="home-portrait">
            <div className="home-portrait-media">
              {photoAvailable ? (
                <img
                  src={profilePhoto}
                  alt={copy.home.photoAlt}
                  onError={() => setPhotoAvailable(false)}
                />
              ) : (
                <div className="home-portrait-placeholder" aria-hidden="true">
                  <span>JM</span>
                  <small>profile-cutout.png</small>
                </div>
              )}
            </div>
            <span className="home-portrait-label">{copy.home.portraitLabel}</span>
          </div>

          <div className="home-terminal" aria-label={copy.home.cardLabel}>
            <div className="home-terminal-bar">
              <div aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span>profile.json</span>
            </div>
            <div className="home-terminal-code">
              <p>
                <span>focus</span>
                <strong>“{copy.home.focus}”</strong>
              </p>
              <p>
                <span>builds</span>
                <strong>[ “API”, “WEB”, “MOBILE” ]</strong>
              </p>
              <p>
                <span>status</span>
                <strong className="terminal-status">“{copy.home.status}”</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="home-signature">
          <span>{copy.home.role}</span>
          <i aria-hidden="true" />
          <span>{copy.home.location}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
