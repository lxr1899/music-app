import BottomPlayer from "./BottomPlayer";
import Topbar from "./TopBar";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (
    <div className="layout flex-column">
        <Topbar/>
        <div className="mid-section flex-row">
            <Sidebar/>
            {children}
        </div>
        <BottomPlayer/>
    </div>
  );
}