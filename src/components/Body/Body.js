import './Body.css';
import Footers from '../Footers/Footers';
import Panel from "../Panel/Panel";
export default function Body() {
  return (
    <div className="body">
      <div className="panel-body">
        <Panel />
      </div>
      <div className="footers-body">
        <Footers />
      </div>
    </div>
  );
}
