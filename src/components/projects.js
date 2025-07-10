import { React, useState } from 'react';
import '../css/cssGeral.css';

import ProjectsDesign from './projects/projectsDesign.js'
import ProjectsDeveloper from './projects/projectsDeveloper'

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('design');
    
    return (
        <div className='projects-div'>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="design">Designer</option>
                <option value="developer">Desenvolvedora Full-stack</option>
            </select>
            <h2 className='title'>Projetos</h2>
            <p className='category'>{selectedCategory === 'design' ? "Design" : "Desenvolvedora Full-stack"}</p>
            {selectedCategory === 'design' && <ProjectsDesign />}
            {selectedCategory === 'developer' && <ProjectsDeveloper />}
        </div>
    )
}

export default Projects;