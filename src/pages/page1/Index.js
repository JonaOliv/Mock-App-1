import NavigatorBar from '../../components/NavigatorBar';
import './styles/sidebar.css';
import $ from 'jquery';

import Sidebar from "./components/Sidebar";
import Quarter1 from "./components/Quarter1";
import Quarter2 from "./components/Quarter2";
import MiniNavbar from "./components/MiniNavbar";

function animateSidebar(event) {
    $("#sidebar").animate({
      width: "toggle"
    }, 400, function() {
      
    });
    return false;
}

function Page1(props) {
    const currentPageNavbar = 1;
    const idSidebar = "sidebar"

    return (
        <div>
            <NavigatorBar currentPageNavbar={currentPageNavbar}/>

            <Sidebar idSidebar={idSidebar}/>

            <div className="container-fluid">
                <MiniNavbar animateSidebar={animateSidebar}/>
                <div className="row">
                    <Quarter1 />
                </div>
                <hr className="jb-hr" />
                <div className="row">
                    <Quarter2 />
                </div>
            </div>
        </div>
    );
}
  
export default Page1;