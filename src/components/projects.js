import { React, useState } from 'react';
import '../css/cssGeral.css';

import ProjectsDesign from './projects/projectsDesign.js';
import ProjectsDeveloper from './projects/projectsDeveloper.js';

import Header from "./header.js";
import Footer from "./footer.js";

import '../css/projects.css';

import useScrollReveal from '../hooks/useScrollReveal';

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('design');
    const [isTransitioning, setIsTransitioning] = useState(false);

    useScrollReveal(['.projects-div h2', '.projects-category select', '.projects-category p'], {
        origin: 'bottom',
        distance: '20px',
        delay: 200,
        interval: 100
    });

    useScrollReveal(['.projects-div a'], {
        origin: 'right',
        distance: '40px',
        delay: 400,
    });

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedCategory(newCategory);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div>
            <Header />
            <div className='projects-div'>
                <div className="projects-category">
                    <h2 className='title'>Projetos</h2>
                    <p className='category'>Veja os projetos que já desenvolvi como:</p>
                    <select onChange={handleCategoryChange} value={selectedCategory}>
                        <option value="design">Designer</option>
                        <option value="developer">Desenvolvedora Full-stack</option>
                    </select>
                </div>

                <div className={`fade-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    {selectedCategory === 'design' && <ProjectsDesign />}
                    {selectedCategory === 'developer' && <ProjectsDeveloper />}
                </div>

                <p>
                    Gostou de algum dos projetos? Veja mais no{' '}
                    <a href='https://www.github.com/lilytorrx' target="_blank" rel="noopener noreferrer">
                        meu Github!
                    </a>
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
