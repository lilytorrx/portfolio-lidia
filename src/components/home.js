import "../css/cssGeral.css";
import "../css/homePage.css";
import "../css/timeline.css";

import Header from "./header.js";
import MainContent from "./mainContent.js";
import Timeline from "./timeline.js";

import useScrollReveal from '../hooks/useScrollReveal';
import Footer from "./footer.js";

function Home() {
    useScrollReveal(['.home-page'], { origin: 'top', distance: '40px', delay: 200 });
    useScrollReveal(['.home-page h2'], { origin: 'left', delay: 100 });

    return (
        <div className="home-page">
            <Header />
            <MainContent />
            <Timeline />
            <Footer />
        </div>
    );
}

export default Home;
