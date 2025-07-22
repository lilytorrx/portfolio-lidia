import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

import Year2022 from './years/year2022.js';
import Year2023 from './years/year2023.js';
import Year2024 from './years/year2024.js';
import Year2025 from './years/year2025.js';

import '../css/timeline.css';
import '../css/cssGeral.css';
import '../css/year.css';
import useScrollReveal from '../hooks/useScrollReveal';

function Timeline() {
    const [selectedYear, setSelectedYear] = useState(2022);
    
    useScrollReveal(['.timeline'], { origin: 'top' });
    useEffect(() => {
        ScrollReveal().reveal('.timeline', {
            distance: '40px',
            duration: 1000,
            easing: 'ease-in-out',
            delay: 100,
            reset: false,
        });
    }, []);
    const changeYear = () => {
        switch (selectedYear) {
            case 2022:
                return <Year2022 />;
            case 2023:
                return <Year2023 />;
            case 2024:
                return <Year2024 />;
            case 2025:
                return <Year2025 />;
            default:
                return <Year2022 />;
        }
    };

    return (
        <div className="timeline" id="timeline">
            <h2>Linha do tempo</h2>
            <div className="years">
                <div className="year">
                    <button
                        className={`btnYear ${selectedYear === 2022 ? 'active' : ''}`}
                        onClick={() => setSelectedYear(2022)}
                    ></button>
                    <p>2022</p>
                </div>
                <span>&gt;</span>
                <div className="year">
                    <button
                        className={`btnYear ${selectedYear === 2023 ? 'active' : ''}`}
                        onClick={() => setSelectedYear(2023)}
                    ></button>
                    <p>2023</p>
                </div>
                <span>&gt;</span>
                <div className="year">
                    <button
                        className={`btnYear ${selectedYear === 2024 ? 'active' : ''}`}
                        onClick={() => setSelectedYear(2024)}
                    ></button>
                    <p>2024</p>
                </div>
                <span>&gt;</span>
                <div className="year">
                    <button
                        className={`btnYear ${selectedYear === 2025 ? 'active' : ''}`}
                        onClick={() => setSelectedYear(2025)}
                    ></button>
                    <p>2025</p>
                </div>
            </div>
            <div id="content-timeline">
                {changeYear()}
            </div>
        </div>
    );
}

export default Timeline;
