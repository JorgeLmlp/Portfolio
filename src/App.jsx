import "./App.css";
import MyHeader from "./components/MYHeader";
import HomeText from "./components/HomeText";
import { FooterHome } from "./components/FooterHome";
import { Skills } from "./components/Skills";
import { AboutText } from "./components/TextReveal";
import { SiteFooter } from "./components/SiteFooter";
import { IntroLoader } from "./components/IntroLoader";

function App() {
  return (
    <div id="main">
      <IntroLoader />
      <MyHeader />
      <section id="home" className="homeContainer">
        <HomeText />
        <FooterHome />
      </section>

      <section id="page2" className="about-section">
        <div id="page2Container" className="about-container">
          <AboutText />
        </div>
      </section>

      <section id="page3" className="skills-section">
        <div id="page4" className="skills-anchor">
          <Skills />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

export default App;
