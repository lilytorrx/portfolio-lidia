import "../css/cssGeral.css";
import "../css/homePage.css";
import "../css/timeline.css";

import Header from "./header.js";
import MainContent from "./mainContent.js";
import Timeline from "./timeline.js";

function Home() {
    return (
        <div className="home-page">
            <Header />
            <MainContent />
            <Timeline />
        </div>
    );
}

export default Home;
