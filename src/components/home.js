import cssGeral from "../css/cssGeral.css";
import cssHomePage from '../css/homePage.css';
import cssTimeline from '../css/timeline.css';

import Header from "./header.js";
import MainContent from "./mainContent.js";
import Timeline from "./timeline.js"

function Home() {
    return (
        <div style={cssGeral}>
            <Header></Header>
            <MainContent style={cssHomePage}></MainContent>
            <Timeline style={cssTimeline}></Timeline>
        </div>
    )
}

export default Home;
