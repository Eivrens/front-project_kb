import HeaderPanel from '../HeaderPanel/HeaderPanel';
import './Panel.css';

export default function Panel() {
  return (
    <div className="panel">
      <div className="position-header-panel">
        <HeaderPanel/>
      </div>
      <div className="position-body-panel">
        
      </div>
    </div>
  );
}