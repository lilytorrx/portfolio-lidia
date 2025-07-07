import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home } path='/' exact />
            <Route component = { Contact } path='/contact'/>
            <Route component = { Projects } path='/projects'/>
        </BrowserRouter>
    )
}

export default Routes;