import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/home.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element = { <Home/> }/>
                <Route path='/contact' element = { <Contact/> } />
                <Route path='/projects' element = { <Projects/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;