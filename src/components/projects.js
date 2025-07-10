import { React, useState } from 'react';
import '../css/cssGeral.css';

import ProjectsDesign from './projects/projectsDesign.js'
import ProjectsDeveloper from './projects/projectsDeveloper'

import Header from "./header.js"
import Footer from "./footer.js"

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('design');
    
    return (
        <body>
            <Header/>
            <div className='projects-div'>
                <div className="projects-category">
                    <h2 className='title'>Projetos</h2>
                    <p className='category'>{selectedCategory === 'design' ? "Design" : "Desenvolvedora Full-stack"}</p>
                    <select onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="design">Designer</option>
                        <option value="developer">Desenvolvedora Full-stack</option>
                    </select>
                </div>
                {selectedCategory === 'design' && <ProjectsDesign />}
                {selectedCategory === 'developer' && <ProjectsDeveloper />}
                <p>Gostou de algum dos projetos? Veja mais no <a href='https://www.github.com/lilytorrx' target="_blank" rel="noopener no referrer">meu Github!</a></p>
            </div>
            <Footer />
        </body>
    );
}

export default Projects;