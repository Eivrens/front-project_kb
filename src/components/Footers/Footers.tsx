import FooterAbout from "./FooterAbout/FooterAbout";
import FootersAdoptions from "./FooterAdoption/FooterAdoption";
import FooterFollow from "./FooterFollow/FooterFollow";
import FooterHelp from "./FooterHelp/FooterHelp";
import FooterPolygon from "./FooterPolygon/FooterPolygon";
import "./Footers.css";
export default function Footers() {
  return (
    <div className="footers">
      <div className="footer-adoption">
        <FootersAdoptions />
      </div>
      <div className="footer-follow">
        <FooterFollow />
      </div>
      <div className="footer-help">
        <FooterHelp />
      </div>
      <div className="footer-about">
        <FooterAbout />
      </div>
      <div className="about-team-polygon">
        <FooterPolygon />
      </div>
    </div>
  );
}
