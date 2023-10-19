import ModuleList from "./ModuleList";
import ProgressTrackbar from "../ProgressTrackbar";
import './index.css';

function Modules() {
  return (
    <div id="modules">
        <ProgressTrackbar />
        <hr width="100%" />
        <ModuleList />
    </div>
  );
}
export default Modules;