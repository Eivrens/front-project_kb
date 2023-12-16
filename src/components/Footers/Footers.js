import './Footers.css';
import FooterAdoption from './FooterAdoption/FooterAdoption';
import FooterFollow from './FooterFollow/FooterFollow';
import FooterHelp from './FooterHelp/FooterHelp';
import FooterAbout from './FooterAbout/FooterAbout';
import FooterPolygon from './FooterPolygon/FooterPolygon';
export default function Footers() {
  return (
    <div className='footers'>
        <div className="footer-adoption"><FooterAdoption/></div>
        <div className="footer-follow"><FooterFollow/></div>
        <div className="footer-help"><FooterHelp/></div>
        <div className="footer-about"><FooterAbout/></div>
        <div className="about-team-polygon"><FooterPolygon/></div>
      </div>
  )
}