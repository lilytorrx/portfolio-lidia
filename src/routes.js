import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home/> } path='/'/>
                <Route element = { <Contact/> } path='/contact'/>
                <Route element = { <Projects/> } path='/projects'/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;