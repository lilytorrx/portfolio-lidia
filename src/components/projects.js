import { React, useState } from 'react';
import '../css/cssGeral.css';

import ProjectsDesign from './projects/projectsDesign.js';
import ProjectsDeveloper from './projects/projectsDeveloper.js';

import Header from "./header.js";
import Footer from "./footer.js";

import useScrollReveal from '../hooks/useScrollReveal';

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('design');

    // Revela o título e o seletor com animações
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

    return (
        <div>
            <Header />
            <div className='projects-div'>
                <div className="projects-category">
                    <h2 className='title'>Projetos</h2>
                    <p className='category'>
                        {selectedCategory === 'design' ? "Design" : "Desenvolvedora Full-stack"}
                    </p>
                    <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                        <option value="design">Designer</option>
                        <option value="developer">Desenvolvedora Full-stack</option>
                    </select>
                </div>

                {selectedCategory === 'design' && <ProjectsDesign />}
                {selectedCategory === 'developer' && <ProjectsDeveloper />}

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
